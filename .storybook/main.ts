import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // @ts-ignore
    config.module.rules[0] = {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      type: "javascript/auto",
      exclude: [/node_modules/, /core-js/],
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: [require.resolve("babel-plugin-remove-graphql-queries")],
          },
        },
      ],
    };

    // @ts-ignore
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@components": path.resolve(__dirname, "../src/components"),
    };

    // @ts-ignore
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
};
export default config;
