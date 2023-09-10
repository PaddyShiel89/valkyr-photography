import React from "react";
import { getScrollbarWidth } from "@helpers";
import {
  backdrop as cBackdrop,
  base as cBase,
  content as cContent,
  inner as cInner,
} from "./Lightbox.module.scss";

const Lightbox = ({ setShowHandler, show }: LightboxProps) => {
  // Toggle the scrollbar
  document.body.style.overflowY = show ? "hidden" : "";
  document.body.style.paddingRight = show ? getScrollbarWidth() + "px" : "";

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
          <div className={cContent}>Image</div>
        </div>
      </div>
      <div className={cBackdrop}></div>
    </>
  ) : null;
};

export default Lightbox;

type LightboxProps = {
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
