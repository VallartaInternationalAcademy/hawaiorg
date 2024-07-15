import React from "react";

interface GalleryCardProps {
  imageSrc: string;
  overlayImageSrc: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  imageSrc,
  overlayImageSrc,
}) => {
  return (
    <div className="gallery-card">
      <div className="card border-0 work-container work-primary work-creative position-relative d-block overflow-hidden rounded mx-2">
        <div className="card-body p-0">
          <div className="position-relative overflow-hidden">
            <img src={imageSrc} className="img-fluid" alt="work-image" />
            <div
              className="overlay-grid"
              style={{ backgroundImage: `url(${overlayImageSrc})` }}
            ></div>
          </div>
          <div className="icons text-center p-4">
            <a
              href={imageSrc}
              className="work-icon bg-white d-inline-flex rounded-pill lightbox"
            >
              <i className="fea icon-sm image-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
