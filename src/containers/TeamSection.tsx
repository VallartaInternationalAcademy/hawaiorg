import React from "react";

export interface profile {
  imagen: string;
  nombre: string;
  puesto: string;
}

interface TeamProps {
  Team: profile[];
}

const TeamSection = ({ Team }: TeamProps) => {
  return (
    <div className="container">
      <div className="row">
        {Team.map((t, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="d-flex flex-column align-items-center">
              <img
                src={t.imagen}
                className="avatar avatar-large rounded-circle img-fluid"
                style={{width: '100% \\9'}}
                alt=""
              />
              <div className="content">
                <h5 className="mb-0">
                  <a className="text-dark">{t.nombre}</a>
                </h5>
                {/*<small className="position text-muted">{t.puesto}</small>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
