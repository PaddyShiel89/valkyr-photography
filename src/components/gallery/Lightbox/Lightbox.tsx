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

const Lightbox = ({
  nextImageHandler,
  photo,
  setShowHandler,
  show,
}: LightboxProps) => {
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

  return show ? (
    <>
      <div className={cBase} onClick={handleModalClick}>
        <div className={cInner}>
          <button aria-label="Load the previous image" type="button">
            Prev
          </button>
          <div className={cContent}>
            <GatsbyImage
              alt={photo.altText || ""}
              className={cImage}
              data-testid="lightbox-image"
              image={photo.gatsbyImage as IGatsbyImageData}
              objectFit="contain"
            />
          </div>
          <button
            aria-label="Load the next image"
            onClick={nextImageHandler}
            type="button"
          >
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
  nextImageHandler: () => void;
  photo: ValkyrPhoto;
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
