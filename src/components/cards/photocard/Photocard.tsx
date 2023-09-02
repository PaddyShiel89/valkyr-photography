import React from "react";
import { base as pcBase } from "./Photocard.module.scss";

const Photocard = () => {
  return (
    <div className={pcBase}>
      <img
        src="https://unsplash.it/600/400"
        alt="Temporary image for development purposes."
      />
      <div>Categories</div>
      <h5>
        <div>Heading</div>
        <div>Subheading</div>
      </h5>
      <div>Body content</div>
      <div>Link</div>
    </div>
  );
};

export default Photocard;
