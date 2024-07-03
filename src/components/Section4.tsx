import banner from "../assets/images/banner2.png";

const Selction4 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex justify-between">
        <div className=" md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LOREM IPSUM DOLOR LOREM
          </h2>
          <p className="text-xl md:text-md mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button
            className="bg-main text-white p-4 md:p-6 px-6 md:px-8 lg:px-12 text-lg md:text-xl lg:text-2xl font-bold"
            style={{ borderRadius: "4rem" }}
          >
            READ MORE
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={banner}
            className="h-[60%] w-[60%] md:h-[70%] md:w-[70%] lg:h-[90%] lg:w-[90%] pl-0 md:pl-8 lg:pl-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Selction4;
