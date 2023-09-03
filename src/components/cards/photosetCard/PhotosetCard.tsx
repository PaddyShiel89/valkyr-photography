import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import { base as pcBase } from "./PhotosetCard.module.scss";

const PhotosetCard = ({
  categories,
  date,
  description,
  featuredPhoto,
  models,
}: PhotosetCardProps) => {
  const month = getMonthFromSanityDate(date as string);
  const year = getYearFromSanityDate(date as string);
  const subtitle = month + " " + year;

  console.log(featuredPhoto);
  const imgData = getImage(featuredPhoto?.image?.asset?.gatsbyImage || null);
  return (
    <div className={pcBase}>
      {imgData ? <GatsbyImage alt="" image={imgData} /> : null}
      <div>
        {categories?.map((c) => (
          <span key={c?.id}>{c?.name}</span>
        ))}
      </div>
      <h5>
        <div>{models}</div>
        <div>{subtitle}</div>
      </h5>
      {!!description ? <ReactMarkdown children={description} /> : null}
      <div>Link</div>
    </div>
  );
};

export default PhotosetCard;

type PhotosetCardProps = {
  categories: Queries.SanityPhotosets["categories"];
  date: Queries.SanityPhotosets["date"];
  description: Queries.SanityPhotosets["description"];
  featuredPhoto: Queries.SanityPhotosets["featuredPhoto"];
  models: Queries.SanityPhotosets["models"];
};
