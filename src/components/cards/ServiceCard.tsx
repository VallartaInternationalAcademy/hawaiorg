import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  Icon: IconType;
  service: string;
  descripcion: string;
  link: string;
}

const ServiceCard = ({
  Icon,
  service,
  descripcion,
  link,
}: ServiceCardProps) => {
  return (
    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
      <div className="card shadow-sm text-primary feature-full-bg rounded p-4 position-relative overflow-hidden border-2 service-card h-100">
        <span className="display-4 mb-4 icon-color text-center">
          <Icon />
        </span>
        <div className="card-body p-0 content text-center">
          <h5>{service}</h5>
          <p className="para text-muted">{descripcion}</p>
          <div className="">
            <Link to={link} className="readmore text-muted fw-semibold">
              Read more <i className="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
