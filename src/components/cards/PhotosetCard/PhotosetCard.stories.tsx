import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PhotosetCard from "./PhotosetCard";

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
  parameters: {
    backgrounds: {
      default: "gray-100",
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PhotosetCard>;

// In order to get sources to work in Storybook, they must each be prepended
// with the localhost domain, which must be running.

export const Default: Story = {
  args: {
    altTitle: "Set One",
    description:
      "This set is from my second shoot with Kelly. She mentioned about shooting in these lemon-patterned knickers, and the combination of her styling and the set turned out really well. The feature image where Kelly is giving some serious lip action is one of my favourite shots I've ever taken.",
    slug: "kelly-klein-june-2023",
    subtitle: "Lemons and Oranges",
    featuredPhoto: {
      altText:
        "Blonde model Kelly Klein lies nearly nude on a kitchen counter, looking pensively away from the camera.",
      gatsbyImage: {
        images: {
          sources: [
            {
              srcSet:
                "http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/ae687c5fddd7cc8168aac11710771c79/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D150%26h%3D100%26fm%3Davif%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 150w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/f4b17f8dc1144930f0555192c9266132/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D300%26h%3D200%26fm%3Davif%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 300w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/01ff160628fb8b3c202c038dfe631238/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D600%26h%3D400%26fm%3Davif%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 600w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/81640fe0ef6a64955048e6146b620440/20230610-kelly-klein-0940.avif?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D1200%26h%3D800%26fm%3Davif%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 1200w",
              type: "image/avif",
              sizes: "(min-width: 600px) 600px, 100vw",
            },
            {
              srcSet:
                "http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/b7d6838ebcba1c8608bf591443451f3f/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D150%26h%3D100%26fm%3Dwebp%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 150w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/6f31d04fe6ec3b823d0453c785eeeb79/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D300%26h%3D200%26fm%3Dwebp%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 300w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/34bd4a37c3235152591f115f2e554b4d/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D600%26h%3D400%26fm%3Dwebp%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 600w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/7d0e5a9f983f72eb975f2ba295ad2870/20230610-kelly-klein-0940.webp?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D1200%26h%3D800%26fm%3Dwebp%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 1200w",
              type: "image/webp",
              sizes: "(min-width: 600px) 600px, 100vw",
            },
          ],
          fallback: {
            src: "http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/02d1d5dea53e34dd43d94e0221a078b3/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D150%26h%3D100%26fm%3Djpg%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4",
            srcSet:
              "http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/02d1d5dea53e34dd43d94e0221a078b3/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D150%26h%3D100%26fm%3Djpg%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 150w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/e3ded4ddeba550c769e2a6ac679bebd8/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D300%26h%3D200%26fm%3Djpg%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 300w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/1efc21f9a65d70180bc57bc7ba906dd0/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D600%26h%3D400%26fm%3Djpg%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 600w,http://localhost:8000/_gatsby/image/f5d796c9dbad0cc04d6f4ade299857a3/a38003a83930eeb36c312862f8b9b269/20230610-kelly-klein-0940.jpg?u=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Feg2qiiqf%2Fproduction%2F90b7cd56aa894cbfeea1cee11957f7d937314420-3840x2560.jpg&a=w%3D1200%26h%3D800%26fm%3Djpg%26q%3D100&cd=f561acf9b86533588bffd8b1461f26d4 1200w",
            sizes: "(min-width: 600px) 600px, 100vw",
          },
        },
        layout: "constrained",
        width: 600,
        height: 400,
        backgroundColor: "rgb(184,168,168)",
      },
    },
    models: ["Kelly Klein"],
  },
};
