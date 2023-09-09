import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Default as PhotosetCardStory } from "@components/cards/PhotosetCard/PhotosetCard.stories";
import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import CardSpread from "./CardSpread";

const meta: Meta<typeof CardSpread> = {
  title: "Layouts/Card spread",
  component: CardSpread,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CardSpread>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PhotosetCard {...(PhotosetCardStory.args as PhotosetCardProps)} />
        <PhotosetCard {...(PhotosetCardStory.args as PhotosetCardProps)} />
        <PhotosetCard {...(PhotosetCardStory.args as PhotosetCardProps)} />
        <PhotosetCard {...(PhotosetCardStory.args as PhotosetCardProps)} />
      </>
    ),
  },
};
