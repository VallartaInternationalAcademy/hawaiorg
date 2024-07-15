import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  imagen: string;
  titulo: string;
  descripcion: string;
  nombre: string;
  HistoryLink: string;
}

const BlogCard = ({
  descripcion,
  imagen,
  nombre,
  titulo,
  HistoryLink,
}: BlogCardProps) => {
  return (
    <div className="col-lg-6 col-12 mb-4 pb-2">
      <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
        <div className="row align-items-center g-0">
          <div className="col-md-6">
            <img src={imagen} className="img-fluid" alt="" />
            <div className="overlay"></div>
            <div className="author">
              <small className="user d-block">
                <i className="uil uil-user"></i> {nombre}
              </small>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body content">
              <h5>
                <a
                  href="javascript:void(0)"
                  className="card-title title text-dark"
                >
                  {titulo}
                </a>
              </h5>
              <p className="text-muted mb-0">{descripcion}</p>
              <div className="post-meta d-flex justify-content-between mt-3">
                <Link to={HistoryLink} className="btn btn-primary rounded-5">
                  Read More{" "}
                  <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
