import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import { base as cBase, body as cBody } from "./PhotosetCard.module.scss";
import ConditionalLink from "@components/helpers/ConditionalLink/ConditionalLink";

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
    <div className={cBase}>
      <ConditionalLink to={slug} aria-label="Check out the photoset">
        <GatsbyImage alt={featuredPhoto?.alt || ""} image={imgData} />
      </ConditionalLink>
      <div className={cBody}>
        <ul>
          {categories?.map((c) => (
            <li key={c?.id}>{c?.name}</li>
          ))}
        </ul>
        <h5>
          <ConditionalLink to={slug} aria-label="Check out the photoset">
            <div>{models}</div>
            <div>{subtitle}</div>
          </ConditionalLink>
        </h5>
        {!!description ? <ReactMarkdown children={description} /> : null}
        {slug ? (
          <div>
            <Link to={slug}>Check out the photoset</Link>
          </div>
        ) : null}
      </div>
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
