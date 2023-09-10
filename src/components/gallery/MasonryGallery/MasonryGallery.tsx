import React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { base as cBase, item as cItem } from "./MasonryGallery.module.scss";

const MasonryGallery = ({ photos }: MasonryGalleryProps) => {
  const photosetData = photos.map((p) => {
    const imgData = getImage(p.gatsbyImage) as IGatsbyImageData;
    return { altText: p.altText || "", gatsbyImage: imgData };
  });

  return (
    <ul className={cBase}>
      {photosetData.map((p) => (
        <li className={cItem}>
          <GatsbyImage alt={p.altText} image={p.gatsbyImage} />
        </li>
      ))}
    </ul>
  );
};

export default MasonryGallery;

type MasonryGalleryProps = {
  photos: {
    altText: Queries.SanityImageAsset["altText"];
    gatsbyImage: Queries.SanityImageAsset["gatsbyImage"];
  }[];
};
