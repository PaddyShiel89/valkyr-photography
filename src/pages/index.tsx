import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.scss";

import PhotosetCard from "@components/cards/photosetCard/PhotosetCard";

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  console.log(data);
  const photocardData = data.allSanityPhotosets.nodes[0];
  return (
    <main>
      <PhotosetCard
        categories={photocardData.categories}
        date={photocardData.date}
        description={photocardData.description}
        models={photocardData.models}
        featuredPhoto={photocardData.featuredPhoto}
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
        categories {
          id
          name
          level
        }
        featuredPhoto {
          id
          image {
            asset {
              _id
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
