import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import "@styles/global.scss";

import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import DarkModeToggle from "@components/buttons/DarkModeToggle/DarkMode";
import { getModelsFromSanityPhotos } from "../helpers/sanity";
import CardSpread from "@components/layouts/CardSpread/CardSpread";

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const recentPhotosetsData = data.allSanityPhotosets.nodes.map((n) => {
    return {
      description: n.description,
      featuredPhoto: {
        altText:
          (
            n.photos?.find((n) => n?.featuredImage)
              ?.asset as Queries.SanityImageAsset
          ).altText || "",
        gatsbyImage: (
          n.photos?.find((n) => n?.featuredImage)
            ?.asset as PhotosetCardProps["featuredPhoto"]
        ).gatsbyImage as PhotosetCardProps["featuredPhoto"]["gatsbyImage"],
      },
      models: getModelsFromSanityPhotos(
        (n.photos || []).map((p) => ({
          models: (p?.models || []).map((m) => ({ name: m?.name as string })),
        }))
      ),
      slug: n.slug,
      subtitle: n.title,
      altTitle: n.altTitle,
    };
  });

  return (
    <main>
      <DarkModeToggle />
      <CardSpread>
        <PhotosetCard {...recentPhotosetsData[0]} />
        <PhotosetCard {...recentPhotosetsData[1]} />
        <PhotosetCard {...recentPhotosetsData[2]} />
        <PhotosetCard {...recentPhotosetsData[3]} />
      </CardSpread>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allSanityPhotosets(limit: 4) {
      nodes {
        altTitle
        date
        description
        slug
        title
        photos {
          _key
          featuredImage
          asset {
            altText
            gatsbyImage(width: 600, quality: 100)
          }
          models {
            _key
            name
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;

type IndexPageData = {
  allSanityPhotosets: Queries.SanityPhotosetsConnection;
};
