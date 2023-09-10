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
  const [currentPhoto, setCurrentPhoto] = useState<ValkyrPhoto>(
    photosetData[0]
  );

  /** Handle clicking on an item in the gallery. */
  const handleItemClick = (photo: ValkyrPhoto) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  return (
    <>
      <ul className={cBase}>
        {photosetData.map((p) => {
          const lightboxData = lightbox
            ? { clickHandler: () => handleItemClick(p) }
            : undefined;

          return (
            <MasonryGalleryItem key={p.id} lightbox={lightboxData} photo={p} />
          );
        })}
      </ul>
      <Lightbox
        photo={currentPhoto}
        setShowHandler={setLightboxOpen}
        show={lightboxOpen}
      />
    </>
  );
};

export default MasonryGallery;

type MasonryGalleryProps = {
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
      <button onClick={lightbox.clickHandler} type="button">
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
  };
  photo: ValkyrPhoto;
};
