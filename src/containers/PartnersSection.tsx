import React from "react";

export interface partner {
  logo: string;
  name: string;
  description: string;
  urlLink?: string;
}

interface PartnersProps {
  partners: partner[];
}

const PartnersSection = ({ partners }: PartnersProps) => {
  return (
    <div className="container">
      <div className="row">
        {partners.map((item) => (
          <div key={item.name} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center w-75">
                <a href={item.urlLink} target="_blank">
                  <img
                    src={item.logo}
                    className="rounded-lg img-fluid max-width:220px"
                    style={{ maxWidth: "350px", maxHeight: "150px", objectFit: "contain" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="content ms-3">
                <h5 className="mb-2 text-center">
                  <a href={item.urlLink} className="text-dark" target="_blank">{item.name}</a>
                </h5>
                <p className="position text-muted" style={{ textAlign: "left" }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
