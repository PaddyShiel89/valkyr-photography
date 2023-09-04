import { allSanityPhotoCategories } from "@testing/data";

const data: any = {};

// Sort categories alphabetically
const sortedCategories = allSanityPhotoCategories.nodes.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// Push each category to the data object, using its name as the identifier.
sortedCategories.forEach((node) => {
  data[node.name] = node;
});

export { data };

export const argTypes = {
  options: Object.keys(data),
  mapping: data,
  control: {
    type: "check",
  },
};
