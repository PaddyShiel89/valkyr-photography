import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import CallToAction from "@components/buttons/CallToAction/CallToAction";
import ConditionalLink from "@components/helpers/ConditionalLink/ConditionalLink";
import {
  base as cBase,
  body as cBody,
  footer as cFooter,
  description as cDescription,
  subtitle as cSubtitle,
  title as cTitle,
} from "./PhotosetCard.module.scss";

const PhotosetCard = ({
  altTitle,
  description,
  featuredPhoto,
  models,
  slug,
  subtitle,
}: PhotosetCardProps) => {
  /* -------------------------- GatsbyImage component ------------------------- */

  const imgData = getImage(
    featuredPhoto?.gatsbyImage || null
  ) as IGatsbyImageData;

  const linkText = "Check out this photoset";

  /* --------------------- Manage title using model names --------------------- */

  let modelNamesAsTitle =
    models?.length === 1
      ? models[0] // For only one model, show the full name
      : models?.length === 2
      ? models.map((m) => m?.split(" ")[0]).join(" & ") // For two models, show their first names
      : altTitle; // For more than two models, use the alternative title;

  return (
    <div className={cBase}>
      <ConditionalLink to={slug} aria-label={linkText} tabIndex={-1}>
        <GatsbyImage alt={featuredPhoto.altText || ""} image={imgData} />
      </ConditionalLink>
      <div className={cBody}>
        <h3>
          <ConditionalLink to={slug} aria-label={linkText} tabIndex={-1}>
            <div className={cTitle}>{modelNamesAsTitle}</div>
            <div className={cSubtitle}>{subtitle}</div>
          </ConditionalLink>
        </h3>
        {!!description ? (
          <div className={cDescription}>
            <ReactMarkdown children={description} />
          </div>
        ) : null}
      </div>
      {slug ? (
        <div className={cFooter}>
          <CallToAction to={slug}>{linkText}</CallToAction>
        </div>
      ) : null}
    </div>
  );
};

export default PhotosetCard;

export type PhotosetCardProps = {
  description: Queries.SanityPhotosets["description"];
  featuredPhoto: ValkyrPhoto;
  models: Queries.SanityModels["name"][];
  slug: Queries.SanityPhotosets["slug"];
  subtitle: Queries.SanityPhotosets["title"];
  altTitle?: Queries.SanityPhotosets["altTitle"];
};
