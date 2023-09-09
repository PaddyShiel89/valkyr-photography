import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import "@styles/global.scss";

import PhotosetCard, {
  PhotosetCardProps,
} from "@components/cards/PhotosetCard/PhotosetCard";
import DarkModeToggle from "@components/buttons/DarkModeToggle/DarkMode";

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const photocardData = data.allSanityPhotosets.nodes[0];
  const featuredPhoto = photocardData.photos?.find((p) => p?.featuredImage)
    ?.asset as PhotosetCardProps["featuredPhoto"];

  // Create an object which will contain each model name as a key and the
  // number of appearances in the set as a value.
  const modelAppearance: { [name: string]: number } = {};

  // Loop through each photo
  photocardData.photos?.forEach((p) =>
    // Loop through each model in the photo
    p?.models?.forEach((m) =>
      m?.name && modelAppearance[m.name]
        ? modelAppearance[m.name]++
        : (modelAppearance[m?.name as string] = 1)
    )
  );

  // Convert the object into an array of [name, value] items, then sort them
  // from highest to lowest.
  const modelAppearanceArray = Object.keys(modelAppearance)
    .map((m) => [m, modelAppearance[m]])
    .sort((a, b) => (a[1] as number) - (b[1] as number));

  // Create an array of just models names, pre-sorted by number of appearances.
  const models = modelAppearanceArray.map((m) => m[0] as string);

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
