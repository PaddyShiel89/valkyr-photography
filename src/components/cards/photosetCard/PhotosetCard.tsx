import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import { base as pcBase } from "./PhotosetCard.module.scss";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
});
const builder = imageUrlBuilder(client);

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
  return (
    <div className={pcBase}>
      <img
        src={builder
          .image(featuredPhoto?.image as SanityImageSource)
          .width(800)
          .quality(100)
          .url()}
        alt=""
      />
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
