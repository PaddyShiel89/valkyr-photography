import React, { useState } from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { base as cBase, item as cItem } from "./MasonryGallery.module.scss";
import Lightbox from "@components/gallery/Lightbox/Lightbox";

const MasonryGallery = ({ lightbox, photos }: MasonryGalleryProps) => {
  const photosetData = photos.map((p) => {
    const imgData = getImage(p.gatsbyImage) as IGatsbyImageData;
    return { altText: p.altText, gatsbyImage: imgData, id: p.id };
  });

  /* ------------------------------ Lightbox data ----------------------------- */

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  /** Handle clicking on an item in the gallery. */
  const handleItemClick = (i: number) => {
    setCurrentPhoto(i);
    setLightboxOpen(true);
  };

  /** Handle loading the next image into the lightbox. */
  const handleLoadNextImage = () => {
    // If the current photo is the last in the array, set it to the first photo
    // in the array. Otherwise, load the next photo.
    setCurrentPhoto(currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1);
  };

  /** Handle loading the previous image into the lightbox. */
  const handleLoadPreviousImage = () => {
    // If the current photo is the first in the array, set it to the last photo
    // in the array. Otherwise, load the previous photo.
    setCurrentPhoto(currentPhoto === 0 ? photos.length - 1 : currentPhoto - 1);
  };

  return (
    <>
      <ul className={cBase}>
        {photosetData.map((p, i) => {
          const lightboxData = lightbox
            ? { clickHandler: () => handleItemClick(i), isOpen: lightboxOpen }
            : undefined;

          return (
            <MasonryGalleryItem key={p.id} lightbox={lightboxData} photo={p} />
          );
        })}
      </ul>
      <Lightbox
        nextImageHandler={handleLoadNextImage}
        photo={photosetData[currentPhoto]}
        previousImageHandler={handleLoadPreviousImage}
        setShowHandler={setLightboxOpen}
        show={lightboxOpen}
      />
    </>
  );
};

export default MasonryGallery;

export type MasonryGalleryProps = {
  lightbox: boolean;
  photos: ValkyrPhotoset;
};

/* -------------------------------------------------------------------------- */
/*                        Mason Gallery item component                        */
/* -------------------------------------------------------------------------- */

const MasonryGalleryItem = ({ lightbox, photo }: MasonryGalleryItemProps) => {
  const imgData = getImage(photo.gatsbyImage) as IGatsbyImageData;

  return lightbox ? (
    <li className={cItem}>
      <button
        aria-label="Open this image in fullscreen"
        onClick={lightbox.clickHandler}
        tabIndex={lightbox.isOpen ? -1 : undefined}
        type="button"
      >
        <GatsbyImage alt={photo.altText || ""} image={imgData} />
      </button>
    </li>
  ) : (
    <li className={cItem}>
      <GatsbyImage alt={photo.altText || ""} image={imgData} />
    </li>
  );
};

type MasonryGalleryItemProps = {
  lightbox?: {
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
  };
  photo: ValkyrPhoto;
};
