import type { Meta, StoryObj } from "@storybook/react";
import PhotosetCard from "./PhotosetCard";

const meta: Meta<typeof PhotosetCard> = {
  title: "Cards/Photoset card",
  component: PhotosetCard,
};

export default meta;
type Story = StoryObj<typeof PhotosetCard>;

const categories: Queries.SanityPhotosets["categories"] = [
  // @ts-ignore
  {
    id: "-62e3a7ed-7d71-51c4-af10-04251dae2a5a",
    name: "glamour",
    level: "nsfw",
  },
];

export const Default: Story = {
  args: {
    models: "Kelly Klein",
    categories,
    date: "2023-06-10",
    description:
      "A set from my second shoot with the gorgeous Kelly Klein.\n\nShe wore a lemon and orange set that looked incredible.",
  },
};
