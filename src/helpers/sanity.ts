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

/** Returns the long name of the month from the provided date. */
export const getMonthFromSanityDate = (date: string) =>
  LongMonth[parseInt(date.split("-")[1])];

/** Returns the long year from the provided date. */
export const getYearFromSanityDate = (date: string) => date.split("-")[0];
