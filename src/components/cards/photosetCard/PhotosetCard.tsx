import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";
import { base as pcBase } from "./PhotosetCard.module.scss";

const PhotosetCard = ({ date, description, models }: PhotosetCardProps) => {
  const month = getMonthFromSanityDate(date as string);
  const year = getYearFromSanityDate(date as string);
  const subtitle = month + " " + year;

  console.log(description);
  return (
    <div className={pcBase}>
      <img
        src="https://unsplash.it/600/400"
        alt="Temporary image for development purposes."
      />
      <div>Categories</div>
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
  date: Queries.SanityPhotosets["date"];
  description: Queries.SanityPhotosets["description"];
  models: Queries.SanityPhotosets["models"];
};
