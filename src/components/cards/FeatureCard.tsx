import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
      <div className="card features feature-primary feature-full-bg rounded p-4 bg-light position-relative overflow-hidden border-0">
        <span className="h1 icon-color">
          <Icon />
        </span>
        <div className="card-body p-0 content">
          <h5>{title}</h5>
          <p className="para text-muted mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
