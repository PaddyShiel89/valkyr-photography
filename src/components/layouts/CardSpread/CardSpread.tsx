import React from "react";
import { base as cBase, inner as cInner } from "./CardSpread.module.scss";
import CallToAction, {
  CallToActionProps,
} from "@components/buttons/CallToAction/CallToAction";
import Container from "../Container/Container";

const CardSpread = ({
  callToAction,
  className,
  title,
  ...props
}: CardSpreadProps) => {
  const classes = [cInner, className].join(" ");
  return (
    <section className={cBase}>
      {title ? <h2>{title}</h2> : null}
      <Container className={classes} {...props} />
      {callToAction ? <CallToAction {...callToAction} size="lg" /> : null}
    </section>
  );
};

export default CardSpread;

type CardSpreadProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  callToAction?: CallToActionProps;
  title?: string;
};
