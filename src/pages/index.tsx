import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import "@styles/global.scss";

import PhotosetCard from "@components/cards/PhotosetCard/PhotosetCard";
import DarkModeToggle from "@components/buttons/DarkModeToggle/DarkMode";

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const photocardData = data.allSanityPhotosets.nodes[0];
  return (
    <main>
      <DarkModeToggle />
      <PhotosetCard
        date={photocardData.date}
        description={photocardData.description}
        models={photocardData.models}
        featuredPhoto={photocardData.featuredPhoto}
        slug={photocardData.slug}
      />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allSanityPhotosets {
      nodes {
        models
        date
        description
        slug
        featuredPhoto {
          alt
          image {
            asset {
              gatsbyImage(width: 600, quality: 100)
            }
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
