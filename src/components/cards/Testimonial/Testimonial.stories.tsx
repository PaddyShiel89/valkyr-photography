import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./Testimonial";
import { allSanityTestimonials } from "@testing/data";

const meta: Meta<typeof Testimonial> = {
  title: "Cards/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "40rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

const dummyData1 = allSanityTestimonials.nodes[0];
const dummyData2 = allSanityTestimonials.nodes[1];
const dummyData3 = allSanityTestimonials.nodes[2];

export const Example1: Story = {
  args: {
    date: dummyData1.date,
    image: dummyData1.image.asset as ValkyrPhoto,
    name: dummyData1.name,
    quote: dummyData1.quote,
  },
};

export const Example2: Story = {
  args: {
    date: dummyData2.date,
    image: dummyData2.image.asset as ValkyrPhoto,
    name: dummyData2.name,
    quote: dummyData2.quote,
  },
};

export const Example3: Story = {
  args: {
    date: dummyData3.date,
    image: dummyData3.image.asset as ValkyrPhoto,
    name: dummyData3.name,
    quote: dummyData3.quote,
  },
};
