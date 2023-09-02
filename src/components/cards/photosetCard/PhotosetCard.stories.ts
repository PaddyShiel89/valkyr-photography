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
    models: "Kelly Klein",
    date: "2023-06-10",
    description:
      "A set from my second shoot with the gorgeous Kelly Klein.\n\nShe wore a lemon and orange set that looked incredible.",
  },
};
