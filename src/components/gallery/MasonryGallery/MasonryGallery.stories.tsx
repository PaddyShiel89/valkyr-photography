import type { Meta, StoryObj } from "@storybook/react";
import MasonryGallery from "./MasonryGallery";
import { sanityPhotosets } from "@testing/data";
import { IGatsbyImageData } from "gatsby-plugin-image";

const meta: Meta<typeof MasonryGallery> = {
  title: "Galleries/Masonry gallery",
  component: MasonryGallery,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MasonryGallery>;

export const Default: Story = {
  args: {
    photos: sanityPhotosets.photos.map((p) => ({
      altText: p.asset.altText,
      gatsbyImage: p.asset.gatsbyImage as IGatsbyImageData,
    })),
  },
};
