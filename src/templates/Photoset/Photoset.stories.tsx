import type { Meta, StoryObj } from "@storybook/react";
import PhotosetPage, { PhotosetPageProps } from "./Photoset";
import { allSanityPhotosets } from "@testing/data";

const meta: Meta<typeof PhotosetPage> = {
  title: "Pages/Photoset",
  component: PhotosetPage,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "fullwidth",
  },
};

export default meta;
type Story = StoryObj<typeof PhotosetPage>;

// @ts-ignore
const pageData: PhotosetPageProps[] = allSanityPhotosets.nodes;

export const KellyKlein: Story = {
  args: {
    pageContext: pageData[0],
  },
};
