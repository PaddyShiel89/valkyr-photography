import React from "react";
import type { PageProps } from "gatsby";
import { IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";

import "@styles/global.scss";
import MasonryGallery from "@components/gallery/MasonryGallery/MasonryGallery";

const PhotosetPage = ({ pageContext }: PageProps<{}, PhotosetPageProps>) => {
  console.log(pageContext);

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
    <main>
      <h1>{pageContext.title}</h1>
      <div>{pageContext.title}</div>
      <MasonryGallery
        lightbox
        lightboxID={"lightbox" + pageContext.id}
        lightboxPhotos={photoData}
        photos={thumbnailData || []}
      />
    </main>
  );
};

export default PhotosetPage;

interface PhotosetPageProps {
  id: string;
  photos: Queries.SanityPhotosets["photos"];
  thumbs: Queries.SanityPhotosets["photos"];
  title: string;
}
