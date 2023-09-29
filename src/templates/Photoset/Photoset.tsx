import React from "react";
import type { PageProps } from "gatsby";
import { IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";

import "@styles/global.scss";
import MasonryGallery from "@components/gallery/MasonryGallery/MasonryGallery";
import ReactMarkdown from "react-markdown";
import Container from "@components/layouts/Container/Container";
import { main as cMain } from "./Photoset.module.scss";

const PhotosetPage = ({ pageContext }: PageProps<{}, PhotosetPageProps>) => {
  console.log(pageContext);
  const { description } = pageContext;

  const photoData =
    pageContext.photos?.map((p) => ({
      altText: p?.asset?.altText || "",
      gatsbyImage: p?.asset?.gatsbyImage as IGatsbyImageData,
    })) || [];

  const thumbnailData = pageContext.thumbs?.map((t, i) => {
    const imgData = getImage(
      t?.asset?.gatsbyImage as ImageDataLike
    ) as IGatsbyImageData;
    return {
      altText: t?.asset?.altText || "",
      gatsbyImage: imgData,
      id: t?.asset?.id || i.toString(),
    };
  });

  return (
    <main className={cMain}>
      <Container>
        <h1>{pageContext.title}</h1>
        {!!description ? (
          <div>
            <ReactMarkdown children={description} />
          </div>
        ) : null}
      </Container>
      <Container variant="translucent">
        <MasonryGallery
          lightbox
          lightboxID={"lightbox" + pageContext.id}
          lightboxPhotos={photoData}
          photos={thumbnailData || []}
        />
      </Container>
    </main>
  );
};

export default PhotosetPage;

export interface PhotosetPageProps {
  description: Queries.SanityPhotosets["description"];
  id: string;
  photos: Queries.SanityPhotosets["photos"];
  thumbs: Queries.SanityPhotosets["photos"];
  title: string;
}
