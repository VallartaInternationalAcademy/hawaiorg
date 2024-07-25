import React from "react";
import { Link } from "react-router-dom";

interface HistoryCardProps {
  img: string;
  tittle: string;
  history: string;
}

const HistoryCard = ({ img, tittle, history }: HistoryCardProps) => {
  return (
    <div className="col-lg-4 col-md-6 mt-4 pt-2">
      <div className="card blog blog-primary rounded-md shadow overflow-hidden">
        <img src={img} className="img-fluid" alt="" />

        <div className="card-body content">
          <h5>
            <a href="" className="card-title title text-dark">
              {tittle}
            </a>
          </h5>
          <p className="text-muted mb-0">{history}</p>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <Link
              to="/story/1"
              className="btn btn-link primary fw-semibold text-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
