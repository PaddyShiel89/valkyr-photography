import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial";
import { allSanityTestimonials } from "@testing/data";

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

const dummyData = allSanityTestimonials.nodes[0];

export const Default: Story = {
  args: {
    date: dummyData.date,
    image: dummyData.image.asset as ValkyrPhoto,
    name: dummyData.name,
    quote: dummyData.quote,
  },
};
