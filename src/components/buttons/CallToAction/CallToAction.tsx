import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";

import { base as btnBase } from "@components/buttons/button.module.scss";
import { callToAction as cCallToAction } from "./CallToAction.module.scss";

/** A call to action component using a Gatsby Link. */
const CTAGatsbyLink = ({ className, ...props }: CTAGatsbyLinkProps) => {
  const classes = [btnBase, cCallToAction, className || ""].join(" ");

  return <Link className={classes} {...props} />;
};

export { CTAGatsbyLink };

type CTAGatsbyLinkProps = Omit<GatsbyLinkProps<{}>, "ref">;
