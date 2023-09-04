import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PhotosetCard, { PhotosetCardProps } from "./PhotosetCard";
import { allSanityPhotoCategories, photosetCardQuery } from "@testing/data";

// @ts-ignore
const defaultProps: PhotosetCardProps =
  photosetCardQuery.allSanityPhotosets.nodes[0];

describe("The PhotosetCard component", () => {
  test("only displays the first three categories for the photoset in the card.", () => {
    const testProps: PhotosetCardProps = {
      ...defaultProps,
      categories: allSanityPhotoCategories.nodes,
    };

    render(<PhotosetCard {...testProps} />);

    const badges = screen.getAllByTestId("category");

    expect(badges.length).toBeLessThanOrEqual(3);

    if (testProps.categories) {
      expect(
        screen.getByText(testProps.categories[0]?.name || "")
      ).toBeInTheDocument();
      expect(
        screen.getByText(testProps.categories[1]?.name || "")
      ).toBeInTheDocument();
      expect(
        screen.getByText(testProps.categories[2]?.name || "")
      ).toBeInTheDocument();
      expect(
        screen.queryByText(testProps.categories[3]?.name || "")
      ).not.toBeInTheDocument();
    }
  });
});
