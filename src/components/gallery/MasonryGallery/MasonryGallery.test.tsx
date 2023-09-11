import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MasonryGallery, { MasonryGalleryProps } from "./MasonryGallery";
import { sanityPhotosets } from "@testing/data";
import { IGatsbyImageData } from "gatsby-plugin-image";

const defaultProps: MasonryGalleryProps = {
  lightbox: true,
  photos: sanityPhotosets.photos.map((p) => ({
    altText: p.asset.altText,
    gatsbyImage: p.asset.gatsbyImage as IGatsbyImageData,
    id: p._key,
  })),
};

describe("The open Lightbox in the MasonryGallery component", () => {
  test("loads the next image in the array when clicking the `next` button.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the first image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[0];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.alt).toBe(defaultProps.photos[0].altText);

    // Get the `next` button in the loaded lightbox gallery and fire a click event
    const nextBtn = screen.getByRole("button", { name: "Load the next image" });
    fireEvent.click(nextBtn);

    // Get the next image in the lightbox gallery
    const nextImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(nextImage).toBeInTheDocument();
    expect(nextImage.alt).toBe(defaultProps.photos[1].altText);
  });

  test("loads the first image in the array when clicking the `next` button when the final image is currently loaded.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the first image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[0];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.alt).toBe(defaultProps.photos[0].altText);

    // Get the `next` button in the loaded lightbox gallery and fire enough
    // clicks to get to the final image.
    const nextBtn = screen.getByRole("button", { name: "Load the next image" });
    for (let i = 0; i < defaultProps.photos.length - 1; i++) {
      fireEvent.click(nextBtn);
    }
    // Get the final image in the lightbox gallery
    const finalImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(finalImage).toBeInTheDocument();
    expect(finalImage.alt).toBe(
      defaultProps.photos[defaultProps.photos.length - 1].altText
    );

    // Fire one final click to check that the next image that is loaded is the first in the array
    fireEvent.click(nextBtn);

    // Get the next image in the lightbox gallery
    const nextImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(nextImage).toBeInTheDocument();
    expect(nextImage.alt).toBe(defaultProps.photos[0].altText);
  });
});
