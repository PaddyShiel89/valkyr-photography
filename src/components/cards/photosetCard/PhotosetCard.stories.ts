import type { Meta, StoryObj } from "@storybook/react";

import PhotosetCard from "./PhotosetCard";

const meta: Meta<typeof PhotosetCard> = {
  title: "Cards/Photoset card",
  component: PhotosetCard,
};

export default meta;
type Story = StoryObj<typeof PhotosetCard>;

export const Default: Story = {
  args: {
    date: "2023-06-10",
    models: "Kelly Klein",
  },
};
