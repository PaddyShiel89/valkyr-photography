import type { Meta, StoryObj } from "@storybook/react";

import Photocard from "./Photocard";

const meta: Meta<typeof Photocard> = {
  title: "Cards/Photocard",
  component: Photocard,
};

export default meta;
type Story = StoryObj<typeof Photocard>;

export const Default: Story = {
  args: {
    models: "Kelly Klein",
  },
};
