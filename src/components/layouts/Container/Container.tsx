import React from "react";
import classNames from "classnames";

import { base as cBase, fixed as cFixed } from "./Container.module.scss";

const Container = ({ width = "fixed", ...props }: ContainerProps) => {
  const classes = classNames(
    cBase,
    { [cFixed]: width === "fixed" },
    props.className
  );
  return <div {...props} className={classes} />;
};

type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  width?: "fixed" | "fluid";
};

export default Container;
