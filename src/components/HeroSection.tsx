import background from "../assets/images/heroBackground.jpg";

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="hero min-h-screen" style={backgroundStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 md:col-span-3">
            <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase">
              Lorem ipsum dolor, sit amet{" "}
              <span className="text-main">consectetur</span> adipisicing elit.
            </h1>
            <p className="mb-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="bg-main p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold"
              style={{ borderRadius: "40px" }}
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
