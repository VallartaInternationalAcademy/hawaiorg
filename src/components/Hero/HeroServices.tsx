import React from "react";

interface propsHeroServices {
  imagen: string;
  Title: string;
  description?: string;
}

const HeroServices = ({ Title, imagen, description }: propsHeroServices) => {
  return (
    <section
      className="bg-consulting d-flex align-items-center"
      style={{ background: `url(${imagen}) top` }}
    >
      <div className="container z-1">
        <div className="row">
          <div className="col-md-6 background">
            <div className="title-heading pe-lg-5 pe-md-4">
              {/* <span className="badge text-bg-primary mb-2">Consulting</span> */}
              <h1 className="heading fw-bold mb-3 mb-md-5 pb-md-5">{Title}</h1>
              <p className="para-desc text-muted">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
