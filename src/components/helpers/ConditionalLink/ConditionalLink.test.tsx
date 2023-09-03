import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ConditionalLink from "./ConditionalLink";

describe("The ConditionalLink component", () => {
  test("wraps children in a link if a valid `to` prop is provided.", () => {
    render(
      <ConditionalLink to="/kelly-klein">
        <p>Child element</p>
      </ConditionalLink>
    );

    const link = screen.getByRole("link");
    const child = screen.getByText("Child element");

    expect(link).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
  test("does not wrap children in a link if a valid `to` prop is not provided", () => {
    const { queryByRole, getByText } = render(
      <ConditionalLink to="">
        <p>Child element</p>
      </ConditionalLink>
    );

    expect(queryByRole("link")).not.toBeInTheDocument();
    expect(getByText("Child element")).toBeInTheDocument();
  });
});
