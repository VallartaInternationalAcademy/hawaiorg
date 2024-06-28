import image from "../assets/images/cards/cardImge.jpg";

const Gallery = () => {
  const images = [image, image, image, image, image, image, image, image];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image}>
          <img
            className="h-auto max-w-full rounded-lg image-blur"
            src={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
