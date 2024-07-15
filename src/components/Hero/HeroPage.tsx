import React from "react";

interface pages {
  link: string;
  nombre: string;
}

interface HeroProps {
  imagen: string;
  page: string;
  description: string;
  Breadcrumb: pages[];
}

const HeroPage = ({ imagen, page, description, Breadcrumb }: HeroProps) => {
  return (
    <section
      className="bg-half-170 d-table w-100"
      style={{ background: `url(${imagen})` }}
    >
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="pages-heading title-heading">
              <h2 className="text-white title-dark"> {page} </h2>
              <p className="text-white-50 para-desc mb-0 mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="position-breadcrumb">
          <nav aria-label="breadcrumb" className="d-inline-block">
            <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
              {Breadcrumb.map((p, index) => (
                <li key={index} className="breadcrumb-item">
                  <a href={p.link}>{p.nombre}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
