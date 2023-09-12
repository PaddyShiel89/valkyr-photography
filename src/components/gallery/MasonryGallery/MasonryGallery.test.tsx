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

const finalImageIndex = defaultProps.photos.length - 1;

describe("The MasonryGallery component", () => {
  test("load the lightbox when clicking on an image buton", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the first image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[0];
    fireEvent.click(imgLink);

    // Get the image in the lightbox gallery
    const lightboxImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(lightboxImage).toBeInTheDocument();
  });
});

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
    // Get the final image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[finalImageIndex];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.alt).toBe(defaultProps.photos[finalImageIndex].altText);

    // Get the `next` button in the loaded lightbox gallery and fire a click event
    const nextBtn = screen.getByRole("button", { name: "Load the next image" });
    fireEvent.click(nextBtn);

    // Get the next image in the lightbox gallery
    const nextImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(nextImage).toBeInTheDocument();
    expect(nextImage.alt).toBe(defaultProps.photos[0].altText);
  });

  test("loads the previous image in the array when clicking the `previous` button.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the second image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[1];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.alt).toBe(defaultProps.photos[1].altText);

    // Get the `previous` button in the loaded lightbox gallery and fire a click event
    const prevBtn = screen.getByRole("button", {
      name: "Load the previous image",
    });
    fireEvent.click(prevBtn);

    // Get the previous image in the lightbox gallery
    const prevImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(prevImage).toBeInTheDocument();
    expect(prevImage.alt).toBe(defaultProps.photos[0].altText);
  });

  test("loads the last image in the array when clicking the `previous` button when the first image is currently loaded.", () => {
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

    // Get the `previous` button in the loaded lightbox gallery and fire a click event
    const prevBtn = screen.getByRole("button", {
      name: "Load the previous image",
    });
    fireEvent.click(prevBtn);

    // Get the next image in the lightbox gallery
    const prevImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(prevImage).toBeInTheDocument();
    expect(prevImage.alt).toBe(defaultProps.photos[finalImageIndex].altText);
  });

  test("loads the next image in the array when pressing the right arrow key.", () => {
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

    // Fire the right arrow keyboard key event
    fireEvent.keyDown(window, { code: "ArrowRight" });

    // Get the next image in the lightbox gallery
    const nextImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(nextImage).toBeInTheDocument();
    expect(nextImage.alt).toBe(defaultProps.photos[1].altText);

    // Fire the right arrow keyboard key event again to ensure it works on
    // multiple presses
    fireEvent.keyDown(window, { code: "ArrowRight" });

    // Get the next next image in the lightbox gallery
    const nextNextImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(nextNextImage).toBeInTheDocument();
    expect(nextNextImage.alt).toBe(defaultProps.photos[2].altText);
  });

  test("loads the previous image in the array when pressing the left arrow key.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the second image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[1];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();
    expect(initialImage.alt).toBe(defaultProps.photos[1].altText);

    // Fire the left arrow keyboard key event
    fireEvent.keyDown(window, { code: "ArrowLeft" });

    // Get the previous image in the lightbox gallery
    const prevImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(prevImage).toBeInTheDocument();
    expect(prevImage.alt).toBe(defaultProps.photos[0].altText);

    // Fire the left arrow keyboard key event again to ensure it works on
    // multiple presses
    fireEvent.keyDown(window, { code: "ArrowLeft" });

    // Get the previous previous image in the lightbox gallery
    const prevPrevImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(prevPrevImage).toBeInTheDocument();
    expect(prevPrevImage.alt).toBe(
      defaultProps.photos[finalImageIndex].altText
    );
  });

  test("does not load further images if an arrow key is held down.", () => {
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

    // Fire the right arrow keyboard key event, simulating it as a repeated hold.
    fireEvent.keyDown(window, { code: "ArrowRight", repeat: true });

    // Get the image in the lightbox gallery and expect it to still be the first image
    const nextImage = screen.getByTestId("lightbox-image") as HTMLImageElement;
    expect(nextImage).toBeInTheDocument();
    expect(nextImage.alt).toBe(defaultProps.photos[0].altText);
  });

  test("closes on clicking the cross button.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the first image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[0];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();

    // Fire the escape keyboard key event.
    const crossButton = screen.getByRole("button", {
      name: "Close fullscreen mode",
    });
    fireEvent.click(crossButton);

    // Expect the lightbox to have closed
    expect(initialImage).not.toBeInTheDocument();
  });

  test("closes on pressing the `Escape` keyboard button.", () => {
    render(<MasonryGallery {...defaultProps} />);

    // Get the first image button in the gallery and fire a click event.
    const imgLink = screen.getAllByRole("button")[0];
    fireEvent.click(imgLink);

    // Get the initial image in the lightbox gallery
    const initialImage = screen.getByTestId(
      "lightbox-image"
    ) as HTMLImageElement;
    expect(initialImage).toBeInTheDocument();

    // Fire the escape keyboard key event.
    fireEvent.keyDown(window, { code: "Escape" });

    // Expect the lightbox to have closed
    expect(initialImage).not.toBeInTheDocument();
  });
});
