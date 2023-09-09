import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import "@styles/global.scss";

import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import DarkModeToggle from "@components/buttons/DarkModeToggle/DarkMode";
import { getModelsFromSanityPhotos } from "../helpers/sanity";

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const photocardData = data.allSanityPhotosets.nodes[0];
  const featuredPhoto = photocardData.photos?.find((p) => p?.featuredImage)
    ?.asset as PhotosetCardProps["featuredPhoto"];
  const models = getModelsFromSanityPhotos(
    (photocardData.photos || []).map((p) => ({
      models: (p?.models || []).map((m) => ({ name: m?.name as string })),
    }))
  );

  return (
    <main>
      <DarkModeToggle />
      <PhotosetCard
        altTitle={photocardData.altTitle}
        description={photocardData.description}
        featuredPhoto={featuredPhoto}
        models={models}
        slug={photocardData.slug}
        subtitle={photocardData.title}
      />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allSanityPhotosets(limit: 1) {
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
