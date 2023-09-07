import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { CTAGatsbyLink } from "@components/buttons/CallToAction/CallToAction";
import ConditionalLink from "@components/helpers/ConditionalLink/ConditionalLink";
import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import {
  base as cBase,
  body as cBody,
  ctaContainer as cCTAContainer,
  description as cDescription,
  subtitle as cSubtitle,
  title as cTitle,
} from "./PhotosetCard.module.scss";

const PhotosetCard = ({
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

  const linkText = "Check out this photoset";

  return (
    <div className={cBase}>
      <ConditionalLink to={slug} aria-label={linkText} tabIndex={-1}>
        <GatsbyImage alt={featuredPhoto?.alt || ""} image={imgData} />
      </ConditionalLink>
      <div className={cBody}>
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
          <div className={cCTAContainer}>
            <CTAGatsbyLink to={slug}>{linkText}</CTAGatsbyLink>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PhotosetCard;

export type PhotosetCardProps = {
  date: Queries.SanityPhotosets["date"];
  description: Queries.SanityPhotosets["description"];
  featuredPhoto: Queries.SanityPhotosets["featuredPhoto"];
  models: Queries.SanityPhotosets["models"];
  slug: Queries.SanityPhotosets["slug"];
};
