import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

enum LongMonth {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

/** The configured Sanity client. */
export const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "2021-08-31",
});

/** Returns the long name of the month from the provided date. */
export const getMonthFromSanityDate = (date: string) =>
  LongMonth[parseInt(date.split("-")[1])];

/** Returns the long year from the provided date. */
export const getYearFromSanityDate = (date: string) => date.split("-")[0];

/** Return an array of models names from those featured in the provided photos.
 * The array is sorted from most to least featured. */
export const getModelsFromSanityPhotos = (
  photos: { models: { name: string }[] }[]
) => {
  // Create an object which will contain each model name as a key and the
  // number of appearances in the set as a value.
  const modelAppearance: { [name: string]: number } = {};

  // Loop through each photo
  photos?.forEach((p) =>
    // Loop through each model in the photo
    p?.models?.forEach((m) =>
      m?.name && modelAppearance[m.name]
        ? modelAppearance[m.name]++
        : (modelAppearance[m?.name as string] = 1)
    )
  );

  // Convert the object into an array of [name, value] items, then sort them
  // from highest to lowest.
  const modelAppearanceArray = Object.keys(modelAppearance)
    .map((m) => [m, modelAppearance[m]])
    .sort((a, b) => (a[1] as number) - (b[1] as number));

  // Create an array of just models names, pre-sorted by number of appearances.
  return modelAppearanceArray.map((m) => m[0] as string);
};

/** The builder for sourcing images from Sanity. Remember to always add `.url()` after use to output the url as a string */
export const getSanityImageBuilder = (image: SanityImageSource) => {
  return imageUrlBuilder(sanityClient).image(image);
};
