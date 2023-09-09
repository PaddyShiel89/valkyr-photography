import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import classNames from "classnames";

import { base as btnBase } from "@components/buttons/button.module.scss";
import { base as cbase, lg as cLg } from "./CallToAction.module.scss";

/** A call to action component using a Gatsby Link. */
const CallToAction = ({
  className,
  size = "md",
  ...props
}: CallToActionProps) => {
  const classes = classNames(btnBase, cbase, className, {
    [cLg]: size === "lg",
  });

  return <Link className={classes} {...props} />;
};

export default CallToAction;

// ? Declare the common props type now as it is likely that other CTA components
// based on other elements, e.g. anchor tags, will be required, and it may save
// time refactoring later.
type CallToActionCommonProps = {
  size?: "md" | "lg";
};

export type CallToActionProps = Omit<GatsbyLinkProps<{}>, "ref"> &
  CallToActionCommonProps;
