import React, { useEffect } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { getScrollbarWidth } from "@helpers";
import {
  backdrop as cBackdrop,
  base as cBase,
  content as cContent,
  closeButton as cCloseButton,
  image as cImage,
  inner as cInner,
} from "./Lightbox.module.scss";

const Lightbox = ({
  id,
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
      else if (e.code === "Escape") setShowHandler(false);
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
      <div className={cBase} id={id} onClick={handleModalClick}>
        <div className={cInner}>
          <button
            aria-controls={id}
            aria-label="Close fullscreen mode"
            className={cCloseButton}
            onClick={() => setShowHandler(false)}
            type="button"
          >
            <FontAwesomeIcon
              icon={icon({
                name: "xmark",
                family: "sharp",
                style: "solid",
              })}
            />
          </button>
          <button
            aria-controls={id}
            aria-label="Load the previous image"
            onClick={previousImageHandler}
            type="button"
          >
            <FontAwesomeIcon
              icon={icon({
                name: "chevron-left",
                family: "sharp",
                style: "solid",
              })}
            />
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
            aria-controls={id}
            aria-label="Load the next image"
            onClick={nextImageHandler}
            type="button"
          >
            <FontAwesomeIcon
              icon={icon({
                name: "chevron-right",
                family: "sharp",
                style: "solid",
              })}
            />
          </button>
        </div>
      </div>
      <div className={cBackdrop}></div>
    </>
  ) : null;
};

export default Lightbox;

type LightboxProps = {
  id: string;
  nextImageHandler: () => void;
  photo: ValkyrPhoto;
  previousImageHandler: () => void;
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
