import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "@styles/global.scss";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

// @ts-ignore
window.___navigate = (pathname: string) => {
  action("NavigateTo:")(pathname.split("/iframe.html")[1]);
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#fff",
        },
        {
          name: "gray-100",
          value: "#f8f9fa",
        },
        {
          name: "gray-900",
          value: "#212529",
        },
        {
          name: "black",
          value: "#000",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: "requiredFirst",
    },
  },
};

export default preview;

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const themeClass = theme === "dark" ? "dark-mode" : "";

  switch (theme) {
    case "side-by-side":
      return (
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "6rem",
          }}
        >
          <section className="">
            <StoryFn />
          </section>

          <section className="dark-mode">
            <StoryFn />
          </section>
        </div>
      );

    default:
      return (
        <section className={themeClass}>
          <StoryFn />
        </section>
      );
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      showName: true,
    },
  },
};

export const decorators = [withTheme];
