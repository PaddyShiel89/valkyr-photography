const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@helpers": path.resolve(__dirname, "src/helpers/index.ts"),
      },
    },
  });
};
