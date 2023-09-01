import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
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

      // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
      // Remove core-js to prevent issues with Storybook.
      exclude: [/node_modules/, /core-js/],
      use: [
        {
          loader: "babel-loader",
          options: {
            // Use `babel-plugin-remove-graphql-queries` to remove static
            // queries from components when rendering in storybook.
            plugins: [require.resolve("babel-plugin-remove-graphql-queries")],
          },
        },
      ],
    };

    // Prevent webpack from using Storybook CSS rules to process SCSS modules
    config.module?.rules?.map((rule) =>
      typeof rule === "object" &&
      rule?.test &&
      rule?.test.toString() === "/\\.css$/"
        ? { ...rule, exclude: /\.module\.scss$/ }
        : rule
    );

    // Tell webpack what to do with SCSS modules
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      oneOf: [
        // module.scss files (e.g component styles.module.scss)
        // https://webpack.js.org/loaders/style-loader/#modules
        {
          test: /\.module\.s?css$/,
          use: [
            // Add exports of a module as style to DOM
            {
              loader: "style-loader",
              options: {
                esModule: true,
                modules: {
                  namedExport: true,
                },
              },
            },
            // Loads CSS file with resolved imports and returns CSS code
            {
              loader: "css-loader",
              options: {
                esModule: true,
                modules: {
                  namedExport: true,
                },
              },
            },
            // Loads and compiles a SASS/SCSS file
            {
              loader: "sass-loader",
              // only if you are using additional global variable
              options: {
                additionalData: "@import 'src/styles/global.scss';",
                sassOptions: {
                  includePaths: ["src/styles"],
                },
              },
            },
          ],
        },
        // scss files that are not modules (e.g. custom.scss)
        {
          use: [
            // Add exports of a module as style to DOM
            "style-loader",
            // Loads CSS file with resolved imports and returns CSS code
            "css-loader",
            // Loads and compiles a SASS/SCSS file
            {
              loader: "sass-loader",
              // only if you are using additional global variable
              options: {
                additionalData: "@import 'src/styles/global.scss';",
                sassOptions: {
                  includePaths: ["src/styles"],
                },
              },
            },
          ],
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      // Add alias paths as defined in `tsconfig.json`.
      alias: {
        ...config.resolve?.alias,
        "@components": path.resolve(__dirname, "../src/components"),
      },
      mainFields: ["browser", "module", "main"],
    };

    return config;
  },
};
export default config;
