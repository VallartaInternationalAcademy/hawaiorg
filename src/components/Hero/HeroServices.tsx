import React from "react";

interface propsHeroServices {
  imagen: string;
  Title: string;
  description?: string;
}

const HeroServices = ({ Title, imagen, description }: propsHeroServices) => {
  const formatText = (text: string) => {
    if (!text) return null;

    // Dividir el texto en líneas
    const lines = text.split("\n");

    return lines.map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {line.split(" ").map((word, wordIndex) => {
          // Verificar si la palabra está encerrada en asteriscos
          if (word.startsWith("*") && word.endsWith("*")) {
            const cleanWord = word.slice(1, -1); // Eliminar los asteriscos
            return (
              <span key={wordIndex} className="text-primary fw-bold">
                {cleanWord}{" "}
              </span>
            );
          }
          return <span key={wordIndex}>{word} </span>;
        })}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="mt-5  col-md-7 p-5 px-5">
          <h1 className="fw-bold mb-3 mt-5 pb-md-3">{formatText(Title)}</h1>
          <p className="text-muted pr-5">
            We offer ongoing, tailored support to help households maintain their
            housing stability and avoid future homelessness. By providing
            resources and assistance to address challenges, we ensure that
            households can remain securely housed and continue building a
            stable, independent future.
          </p>
        </div>
        <div className="col-md-5 p-0">
          <img
            src={imagen}
            className="img-fluid w-100 h-100 object-fit-cover"
            alt="Housing Retention"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
