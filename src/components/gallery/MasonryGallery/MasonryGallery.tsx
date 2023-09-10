import React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

const MasonryGallery = ({ photos }: MasonryGalleryProps) => {
  const photosetData = photos.map((p) => {
    const imgData = getImage(p.gatsbyImage) as IGatsbyImageData;
    return { altText: p.altText || "", gatsbyImage: imgData };
  });

  return (
    <div>
      {photosetData.map((p) => (
        <GatsbyImage alt={p.altText} image={p.gatsbyImage} />
      ))}
    </div>
  );
};

export default MasonryGallery;

type MasonryGalleryProps = {
  photos: {
    altText: Queries.SanityImageAsset["altText"];
    gatsbyImage: Queries.SanityImageAsset["gatsbyImage"];
  }[];
};
