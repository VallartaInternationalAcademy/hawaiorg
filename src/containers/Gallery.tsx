import React from "react";
import GalleryCard from "../components/cards/GalleryCard";
import overlayImage from "../assets/images/overlay.png";

import g1 from "../assets/images/charity/g1.jpg";
import g2 from "../assets/images/charity/g2.jpg";
import g3 from "../assets/images/charity/g3.jpg";
import g4 from "../assets/images/charity/g4.jpg";
import g5 from "../assets/images/charity/g5.jpg";
import g6 from "../assets/images/charity/g6.jpg";
import g7 from "../assets/images/charity/g7.jpg";

const Gallery: React.FC = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7];

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        {images.map((image, index) => (
          <GalleryCard
            key={index}
            imageSrc={`${image}`}
            overlayImageSrc={overlayImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
