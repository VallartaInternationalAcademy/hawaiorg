interface Props {
  title: string;
  text: string;
  img: string;
}
const Parallax = ({ text, title, img }: Props) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
          height: "100%",
          filter: "brightness(0.6)",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold mb-4">
            {title}
          </h1>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-12">
            {text}
          </p>
          <button
            className="bg-main text-white p-2 sm:p-4 md:p-6 px-4 sm:px-6 md:px-8 lg:px-12 text-sm sm:text-md md:text-lg lg:text-2xl"
            style={{ borderRadius: "4rem" }}
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
