import type { Meta, StoryObj } from "@storybook/react";

import { photosetCardQuery } from "@testing/data";
import Homepage from "../../pages/index";

const meta: Meta<typeof Homepage> = {
  title: "Pages/Homepage",
  component: Homepage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Default: Story = {
  args: {
    // @ts-ignore
    data: { ...photosetCardQuery },
  },
};
