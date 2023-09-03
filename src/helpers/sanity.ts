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
});

/** Returns the long name of the month from the provided date. */
export const getMonthFromSanityDate = (date: string) =>
  LongMonth[parseInt(date.split("-")[1])];

/** Returns the long year from the provided date. */
export const getYearFromSanityDate = (date: string) => date.split("-")[0];

/** The builder for sourcing images from Sanity. Remember to always add `.url()` after use to output the url as a string */
export const getSanityImageBuilder = (image: SanityImageSource) => {
  return imageUrlBuilder(sanityClient).image(image);
};
