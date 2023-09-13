import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import { allSanityTestimonials, photosetCardQuery } from "@testing/data";
import { getModelsFromSanityPhotos } from "@helpers";
import CardSpread from "./CardSpread";
import Testimonial from "@components/cards/Testimonial/Testimonial";

const meta: Meta<typeof CardSpread> = {
  title: "Layouts/Card spread",
  component: CardSpread,
  parameters: {
    backgrounds: {
      default: "white",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CardSpread>;

const photosetCardData: PhotosetCardProps[] =
  photosetCardQuery.allSanityPhotosets.nodes.map((n) => {
    return {
      description: n.description,
      featuredPhoto: {
        altText: n.photos.find((n) => n.featuredImage)?.asset.altText || "",
        gatsbyImage: n.photos.find((n) => n.featuredImage)?.asset
          .gatsbyImage as PhotosetCardProps["featuredPhoto"]["gatsbyImage"],
      },
      models: getModelsFromSanityPhotos(n.photos),
      slug: n.slug,
      subtitle: n.title,
      altTitle: n.altTitle,
    };
  });

export const PhotosetCards: Story = {
  args: {
    callToAction: {
      children: "View all photosets",
      to: "photosets",
    },
    children: (
      <>
        <PhotosetCard {...photosetCardData[0]} />
        <PhotosetCard {...photosetCardData[1]} />
        <PhotosetCard {...photosetCardData[2]} />
        <PhotosetCard {...photosetCardData[3]} />
      </>
    ),
    title: "Recent photosets",
  },
};

const testimonialData = allSanityTestimonials.nodes.map((t) => ({
  ...t,
  image: t.image.asset as ValkyrPhoto,
}));

export const Testimonials: Story = {
  args: {
    children: (
      <>
        <Testimonial {...testimonialData[0]} />
        <Testimonial {...testimonialData[1]} />
        <Testimonial {...testimonialData[2]} />
      </>
    ),
    title: "Testimonials",
  },
};
