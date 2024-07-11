interface Props {
  background: string;
  title: string;
  tittle_highlight: string;
  descripcion: string;
  main?: boolean;
  section?: string;
  height?: string;
}

const HeroSection = ({
  background,
  title,
  tittle_highlight,
  descripcion,
  main,
  section,
  height = "min-h-screen",
}: Props) => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className={`hero ${height}`} style={backgroundStyle}>
      <div className="hero-content text-neutral-content text-left">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 md:col-span-3">
            <h1 className="mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
              {title} <span className="text-main">{tittle_highlight}</span>
            </h1>
            <p className="mb-5 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
              {descripcion}
            </p>
            {main && (
              <button
                className="bg-main py-4 px-6 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold"
                style={{ borderRadius: "40px" }}
              >
                DONATE NOW
              </button>
            )}
            {section && (
              <span className="text-main text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                {section}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
