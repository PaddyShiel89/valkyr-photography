import { GatsbyLinkProps, Link } from "gatsby";
import React from "react";

const ConditionalLink = ({ to, children, ...props }: ConditionalLinkProps) =>
  !!to ? <Link {...props} to={to} children={children} /> : children;

export default ConditionalLink;

type ConditionalLinkProps = Omit<GatsbyLinkProps<{}>, "ref" | "to"> & {
  to: string | null;
  children: React.ReactNode;
};
