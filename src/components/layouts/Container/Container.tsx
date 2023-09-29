import React from "react";
import classNames from "classnames";

import {
  base as cBase,
  inner as cInner,
  fixed as cFixed,
  translucent as cTranslucent,
  transparent as cTransparent,
} from "./Container.module.scss";

const Container = ({
  variant = "opaque",
  width = "fixed",
  ...props
}: ContainerProps) => {
  const baseClasses = classNames(cBase, {
    [cTranslucent]: variant === "translucent",
    [cTransparent]: variant === "translucent",
  });

  const innerClasses = classNames(
    cInner,
    { [cFixed]: width === "fixed" },
    props.className
  );

  return (
    <div className={baseClasses}>
      <div {...props} className={innerClasses} />
    </div>
  );
};

export type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** Sets the background colour. */
  variant?: "opaque" | "translucent" | "transparent";
  width?: "fixed" | "fluid";
};

export default Container;
