import image from "../assets/images/cards/cardImge.jpg";

const Gallery = () => {
  const images = [image, image, image, image, image, image, image, image];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image) => (
        <div>
          <img
            className="h-auto max-w-full rounded-lg image-blur"
            src={image}
            key={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
