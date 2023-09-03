import { Link } from "gatsby";
import React from "react";

const ConditionalLink = ({ to, children }: ConditionalLinkProps) =>
  !!to ? <Link to={to}>{children}</Link> : children;

export default ConditionalLink;

type ConditionalLinkProps = {
  to: string;
  children: React.ReactNode;
};
