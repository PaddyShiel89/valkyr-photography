export const data = {
  boudoir: {
    id: "-ca242fcf-8fe8-5bba-8fcc-55ad5f4d7987",
    name: "boudoir",
    level: "nsfw",
  },
  fashion: {
    id: "-f80683ab-36dc-574a-8dac-9d4a2a779ad9",
    name: "fashion",
    level: "sfw",
  },
  glamour: {
    id: "-62e3a7ed-7d71-51c4-af10-04251dae2a5a",
    name: "glamour",
    level: "nsfw",
  },
  topless: {
    id: "-b439404b-221c-5dae-be6b-d2a31e3721fc",
    name: "topless",
    level: "nsfw",
  },
};

export const argTypes = {
  options: Object.keys(data),
  mapping: data,
  control: {
    type: "check",
  },
};
