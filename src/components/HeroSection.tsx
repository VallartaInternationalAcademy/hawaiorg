import background from "../assets/images/heroBackground.jpg";

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="hero min-h-screen" style={backgroundStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-9xl" style={{ paddingRight: "24rem" }}>
          <h1 className="mb-5 text-[4rem] font-bold uppercase">
            Lorem ipsum dolor, sit amet{" "}
            <span className="text-main">consectetur</span> adipisicing elit.
          </h1>
          <p className="mb-5 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="bg-main p-4 text-2xl font-bold"
            style={{ borderRadius: "40px" }}
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
