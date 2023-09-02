import React from "react";
import { base as pcBase } from "./PhotosetCard.module.scss";
import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";

const PhotosetCard = ({ date, models }: PhotosetCardProps) => {
  const month = getMonthFromSanityDate(date as string);
  const year = getYearFromSanityDate(date as string);

  console.log(month);
  return (
    <div className={pcBase}>
      <img
        src="https://unsplash.it/600/400"
        alt="Temporary image for development purposes."
      />
      <div>Categories</div>
      <h5>
        <div>{models}</div>
        <div>
          {month} {year}
        </div>
      </h5>
      <div>Body content</div>
      <div>Link</div>
    </div>
  );
};

export default PhotosetCard;

type PhotosetCardProps = Queries.SanityPhotosets;
