import React from "react";
import { base as cBase } from "./CardSpread.module.scss";

const CardSpread = (props: CardSpreadProps) => {
  const classes = [cBase, props.className].join(" ");

  return <section className={classes} {...props} />;
};

export default CardSpread;

type CardSpreadProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
