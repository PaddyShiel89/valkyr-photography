import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import CardSpread from "./CardSpread";

import { photosetCardQuery } from "@testing/data";
import { getModelsFromSanityPhotos } from "../../../helpers/sanity";

const meta: Meta<typeof CardSpread> = {
  title: "Layouts/Card spread",
  component: CardSpread,
  parameters: {
    backgrounds: {
      default: "white",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CardSpread>;

const data: PhotosetCardProps[] =
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

export const Default: Story = {
  args: {
    children: (
      <>
        <PhotosetCard {...data[0]} />
        <PhotosetCard {...data[1]} />
        <PhotosetCard {...data[2]} />
        <PhotosetCard {...data[3]} />
      </>
    ),
  },
};
