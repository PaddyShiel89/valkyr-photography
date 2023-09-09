import React from "react";
import { base as cBase, inner as cInner } from "./CardSpread.module.scss";

const CardSpread = ({ className, ...props }: CardSpreadProps) => {
  const classes = [cInner, className].join(" ");
  return (
    <section className={cBase}>
      <div className={classes} {...props} />
    </section>
  );
};

export default CardSpread;

type CardSpreadProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
