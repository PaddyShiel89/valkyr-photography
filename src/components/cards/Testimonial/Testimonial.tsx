import React from "react";
import { base as cBase } from "./Testimonial.module.scss";

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className={cBase}>
      <div>Img</div>
      <div>Quote</div>
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
