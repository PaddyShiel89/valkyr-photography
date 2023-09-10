import type { Meta, StoryObj } from "@storybook/react";
import Lightbox from "./Lightbox";

const meta: Meta<typeof Lightbox> = {
  title: "Galleries/Lightbox",
  component: Lightbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    setShowHandler: () => {},
    show: true,
  },
  argTypes: {
    setShowHandler: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

export const Default: Story = {};
