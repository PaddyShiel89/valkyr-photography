import React from "react";
import { backdrop as cBackdrop } from "./Lightbox.module.scss";

const Lightbox = ({ setShowHandler, show }: LightboxProps) => {
  return show ? (
    <>
      <div>Modal</div>
      <div className={cBackdrop} onClick={() => setShowHandler(false)}></div>
    </>
  ) : null;
};

export default Lightbox;

type LightboxProps = {
  setShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};
