import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Cards/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {};
