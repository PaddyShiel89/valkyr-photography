import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import {
  base as cBase,
  body as cBody,
  description as cDescription,
  subtitle as cSubtitle,
  title as cTitle,
} from "./PhotosetCard.module.scss";
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

  const linkText = "Check out the photoset";

  return (
    <div className={cBase}>
      <ConditionalLink to={slug} aria-label={linkText} tabIndex={-1}>
        <GatsbyImage alt={featuredPhoto?.alt || ""} image={imgData} />
      </ConditionalLink>
      <div className={cBody}>
        <ul>
          {categories?.map((c) => (
            <li key={c?.id}>{c?.name}</li>
          ))}
        </ul>
        <h5>
          <ConditionalLink to={slug} aria-label={linkText} tabIndex={-1}>
            <div className={cTitle}>{models}</div>
            <div className={cSubtitle}>{subtitle}</div>
          </ConditionalLink>
        </h5>
        {!!description ? (
          <div className={cDescription}>
            <ReactMarkdown children={description} />
          </div>
        ) : null}
        {slug ? (
          <div>
            <Link to={slug}>{linkText}</Link>
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
