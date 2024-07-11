import React, { useState, useEffect } from "react";

type CarouselItem = {
  title: string;
  text: string;
  image: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full flex items-center justify-center bg-gray-900">
      <div className="w-full h-[46rem] sm:h-[24rem] md:h-[24rem] lg:h-[24rem]  overflow-hidden relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
              <div className="w-full md:w-1/2 p-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="block h-full w-full rounded-lg object-cover object-center"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="mb-6">{item.text}</p>
                <button className="px-4 py-2 bg-main text-white rounded-full">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
