import React, { useEffect } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { getScrollbarWidth } from "@helpers";
import {
  backdrop as cBackdrop,
  base as cBase,
  content as cContent,
  image as cImage,
  inner as cInner,
} from "./Lightbox.module.scss";

const Lightbox = ({ photo, setShowHandler, show }: LightboxProps) => {
  // Toggle the scrollbar
  useEffect(() => {
    document.body.style.paddingRight = show ? getScrollbarWidth() + "px" : "";
    return () => {
      document.body.style.paddingRight = "";
    };
  }, [show]);

  /** Handle clicking on the modal element. */
  const handleModalClick = (e: React.MouseEvent) => {
    // Only close if the user clicked directly on the modal, not on a child
    // element.
    if (e.target === e.currentTarget) {
      setShowHandler(false);
    }
  };

  /** Handle clicking on the next image button. */
  const handleNextButtonClick = () => {
    console.log("Load next image");
  };

  /** Handle clicking on the previous image button. */
  const handlePreviousButtonClick = () => {
    console.log("Load previous image");
  };

  return show ? (
    <>
      <div className={cBase} onClick={handleModalClick}>
        <div className={cInner}>
          <button onClick={handlePreviousButtonClick} type="button">
            Prev
          </button>
          <div className={cContent}>
            <GatsbyImage
              alt={photo.altText || ""}
              className={cImage}
              image={photo.gatsbyImage as IGatsbyImageData}
              objectFit="contain"
            />
          </div>
          <button onClick={handleNextButtonClick} type="button">
            Next
          </button>
        </div>
      </div>
      <div className={cBackdrop}></div>
    </>
  ) : null;
};

export default Lightbox;

type LightboxProps = {
  photo: ValkyrPhoto;
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
