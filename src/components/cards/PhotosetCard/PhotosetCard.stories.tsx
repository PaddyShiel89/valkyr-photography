import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { photosetCardQuery } from "@testing/data";
import { getModelsFromSanityPhotos } from "@helpers";
import PhotosetCard, { PhotosetCardProps } from "./PhotosetCard";

const meta: Meta<typeof PhotosetCard> = {
  title: "Cards/Photoset card",
  component: PhotosetCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "40rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PhotosetCard>;

// In order to get sources to work in Storybook, they must each be prepended
// with the localhost domain, which must be running.

const photosetCardData: PhotosetCardProps[] =
  photosetCardQuery.allSanityPhotosets.nodes.map((n) => {
    return {
      description: n.description,
      featuredPhoto: {
        altText: n.photos.find((n) => n.featuredImage)?.asset.altText || "",
        gatsbyImage: n.photos.find((n) => n.featuredImage)?.asset
          .gatsbyImage as PhotosetCardProps["featuredPhoto"]["gatsbyImage"],
      },
      models: getModelsFromSanityPhotos(n.photos),
      slug: n.slug,
      subtitle: n.title,
      altTitle: n.altTitle,
    };
  });

export const Example1: Story = {
  args: photosetCardData[0],
};

export const Example2: Story = {
  args: photosetCardData[1],
};

export const Example3: Story = {
  args: photosetCardData[2],
};

export const Example4: Story = {
  args: photosetCardData[3],
};
