import React from "react";
import ReactMarkdown from "react-markdown";

import {
  base as cBase,
  body as cBody,
  date as cDate,
  footer as cFooter,
  name as cName,
} from "./Testimonial.module.scss";
import { getMonthFromSanityDate, getYearFromSanityDate } from "@helpers";

const Testimonial = ({ date, ...props }: TestimonialProps) => {
  const month = getMonthFromSanityDate(date || "");
  const year = getYearFromSanityDate(date || "");

  return (
    <div className={cBase}>
      <div>Img</div>
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
  );
};

export default Testimonial;

type TestimonialProps = {
  date: Queries.SanityTestimonials["date"];
  image: ValkyrPhoto;
  name: string;
  quote: Queries.SanityTestimonials["quote"];
};
