import React from "react";

export interface partner {
  logo: string;
  name: string;
  description: string;
}

interface PartnersProps {
  partners: partner[];
}

const PartnersSection = ({ partners }: PartnersProps) => {
  return (
    <div className="container">
      <div className="row">
        {partners.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center w-75">
                <img
                  src={item.logo}
                  className="rounded-lg img-fluid max-width:220px"
                  style={{ maxWidth: "350px", maxHeight: "150px", objectFit: "contain" }}
                  alt=""
                />
              </div>
              <div className="content ms-3">
                <h5 className="mb-2 text-center">
                  <a className="text-dark">{item.name}</a>
                </h5>
                <p className="position text-muted" style={{ textAlign: "justify" }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
