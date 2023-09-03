import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PhotosetCard from "./PhotosetCard";

const categories = {
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
};

const meta: Meta<typeof PhotosetCard> = {
  title: "Cards/Photoset card",
  component: PhotosetCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "40rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    categories: {
      options: Object.keys(categories),
      mapping: categories,
      control: {
        type: "check",
      },
    },
  },
  args: {
    // @ts-ignore - Converted via `argTypes.mapping`
    categories: ["glamour"],
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PhotosetCard>;

// In order to get sources to work in Storybook, they must each be prepended
// with the localhost domain, which must be running.
const featuredPhoto = {
  alt: "Blonde model Kelly Klein lying nearly nude on a kitchen counter.",
  image: {
    // @ts-ignore
    asset: {
      gatsbyImage: {
        images: {
          sources: [
            {
              srcSet:
                "http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/ae687c5fddd7cc8168aac11710771c79/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D150%26h%3D100%26fm%3Davif%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 150w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/f4b17f8dc1144930f0555192c9266132/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D300%26h%3D200%26fm%3Davif%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 300w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/01ff160628fb8b3c202c038dfe631238/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D600%26h%3D400%26fm%3Davif%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 600w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/81640fe0ef6a64955048e6146b620440/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D1200%26h%3D800%26fm%3Davif%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 1200w",
              type: "image/avif",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
            {
              srcSet:
                "http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/b7d6838ebcba1c8608bf591443451f3f/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D150%26h%3D100%26fm%3Dwebp%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 150w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/6f31d04fe6ec3b823d0453c785eeeb79/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D300%26h%3D200%26fm%3Dwebp%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 300w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/34bd4a37c3235152591f115f2e554b4d/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D600%26h%3D400%26fm%3Dwebp%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 600w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/7d0e5a9f983f72eb975f2ba295ad2870/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D1200%26h%3D800%26fm%3Dwebp%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 1200w",
              type: "image/webp",
              sizes: "(min-width: 400px) 400px, 100vw",
            },
          ],
          fallback: {
            src: "http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/02d1d5dea53e34dd43d94e0221a078b3/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D150%26h%3D100%26fm%3Djpg%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6",
            srcSet:
              "http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/02d1d5dea53e34dd43d94e0221a078b3/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D150%26h%3D100%26fm%3Djpg%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 150w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/e3ded4ddeba550c769e2a6ac679bebd8/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D300%26h%3D200%26fm%3Djpg%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 300w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/1efc21f9a65d70180bc57bc7ba906dd0/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D600%26h%3D400%26fm%3Djpg%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 600w,http://localhost:8000/_gatsby/image/8374cbbbb4281c884cf14ca8592105b0/a38003a83930eeb36c312862f8b9b269/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F753ee5670d791269d3b923c4983559a123a89d83-2500x1667.jpg&a=w%3D1200%26h%3D800%26fm%3Djpg%26q%3D100&cd=9e81a1bce61782671c85d562c80d70f6 1200w",
            sizes: "(min-width: 400px) 400px, 100vw",
          },
        },
        layout: "constrained",
        width: 400,
        height: (400 / 600) * 400,
        backgroundColor: "rgb(184,168,168)",
      },
    },
  },
};

export const Default: Story = {
  render: (args) => {
    return (
      <div>
        <PhotosetCard {...args} />
      </div>
    );
  },

  args: {
    models: "Kelly Klein",
    date: "2023-06-10",
    description:
      "A set from my second shoot with the gorgeous Kelly Klein.\n\nShe wore a lemon and orange set that looked incredible.",
    // @ts-ignore
    featuredPhoto,
    slug: "kelly-klein-june-2023",
  },
};
