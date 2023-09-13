import React from "react";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import {
  base as cBase,
  body as cBody,
  date as cDate,
  footer as cFooter,
  image as cImage,
  inner as cInner,
  name as cName,
} from "./Testimonial.module.scss";
import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";

const Testimonial = ({ date, image, ...props }: TestimonialProps) => {
  /* ------------------------------- Format date ------------------------------ */

  const month = getMonthFromSanityDate(date || "");
  const year = getYearFromSanityDate(date || "");

  /* -------------------------- GatsbyImage component ------------------------- */

  // Set image height to equal width
  const imgData = getImage({
    ...image.gatsbyImage,
    height: 220,
    width: 220,
  }) as IGatsbyImageData;

  return (
    <div className={cBase}>
      <div className={cImage}>
        <GatsbyImage alt={image.altText || ""} image={imgData} />
      </div>
      <div className={cInner}>
        <ReactMarkdown className={cBody} children={props.quote || ""} />
        <div className={cFooter}>
          <div className={cName}>
            {"\u2014"} {props.name}
          </div>
          <div className={cDate}>
            {month} {year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

type TestimonialProps = {
  date: Queries.SanityTestimonials["date"];
  image: ValkyrPhoto;
  name: string;
  quote: Queries.SanityTestimonials["quote"];
};
