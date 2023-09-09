import type { Meta, StoryObj } from "@storybook/react";
import CallToAction from "./CallToAction";

const meta: Meta<typeof CallToAction> = {
  title: "Buttons/Call to Action",
  component: CallToAction,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "md",
    to: "home",
  },
};

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const WithGatsbyLink: Story = {
  args: {
    children: "Default CTA using Gatsby Link",
  },
};
