import React from "react";
import ReactMarkdown from "react-markdown";

import { base as cBase, body as cBody } from "./Testimonial.module.scss";

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className={cBase}>
      <div>Img</div>
      <ReactMarkdown className={cBody} children={props.quote || ""} />
      <div>Name</div>
      <div>Month YYYY</div>
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
