import type { Meta, StoryObj } from "@storybook/react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { sanityPhotosets } from "@testing/data";
import Lightbox from "./Lightbox";

const meta: Meta<typeof Lightbox> = {
  title: "Galleries/Lightbox",
  component: Lightbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    photo: {
      altText: sanityPhotosets.photos[0].asset.altText,
      gatsbyImage: sanityPhotosets.photos[0].asset
        .gatsbyImage as IGatsbyImageData,
    },
    show: true,
  },
  argTypes: {
    nextImageHandler: { action: "Load the next image" },
    previousImageHandler: { action: "Load the previous image" },
    setShowHandler: {
      action: "Toggle the lightbox on/off",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

export const Default: Story = {};
