const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@helpers": path.resolve(__dirname, "src/helpers/index.ts"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPhotosets(limit: 4) {
        nodes {
          altTitle
          description
          thumbs: photos {
            asset {
              altText
              gatsbyImage(width: 600, quality: 100)
            }
            models {
              id
              name
            }
          }
          photos {
            asset {
              altText
              gatsbyImage(width: 1920, quality: 100)
              id
            }
          }
          slug {
            _key
            _type
            current
            source
          }
          title
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const sets = result.data.allSanityPhotosets.nodes || [];
  sets.forEach((node, index) => {
    const path = `/photosets/${node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/Photoset/Photoset.tsx"),
      context: {
        ...node,
        slug: node.slug.current,
      },
    });
  });
};
