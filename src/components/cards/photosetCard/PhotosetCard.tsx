import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import { base as pcBase } from "./PhotosetCard.module.scss";

const PhotosetCard = ({
  categories,
  date,
  description,
  featuredPhoto,
  models,
  slug,
}: PhotosetCardProps) => {
  const month = getMonthFromSanityDate(date as string);
  const year = getYearFromSanityDate(date as string);
  const subtitle = month + " " + year;

  const imgData = getImage(
    featuredPhoto?.image?.asset?.gatsbyImage || null
  ) as IGatsbyImageData;

  return (
    <div className={pcBase}>
      <GatsbyImage alt={featuredPhoto?.alt || ""} image={imgData} />
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
      {slug ? (
        <div>
          <Link to={slug}>Check out the photoset</Link>
        </div>
      ) : null}
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
  slug: Queries.SanityPhotosets["slug"];
};
