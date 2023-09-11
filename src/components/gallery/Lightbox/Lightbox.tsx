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
  previousImageHandler,
  setShowHandler,
  show,
}: LightboxProps) => {
  // Keyboard event listeners
  const changeImageOnKeyDown = (e: KeyboardEvent) => {
    if (!e.repeat) {
      if (e.code === "ArrowRight") nextImageHandler();
      else if (e.code === "ArrowLeft") previousImageHandler();
    }
  };

  useEffect(() => {
    // Toggle the scrollbar
    document.body.style.overflowY = show ? "hidden" : "";
    document.body.style.paddingRight = show ? getScrollbarWidth() + "px" : "";
    window.addEventListener("keydown", changeImageOnKeyDown);
    return () => {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", changeImageOnKeyDown);
    };
  });

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
          <button
            aria-label="Load the previous image"
            onClick={previousImageHandler}
            type="button"
          >
            Previous
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
  previousImageHandler: () => void;
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
