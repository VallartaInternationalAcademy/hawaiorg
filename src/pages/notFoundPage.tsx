import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";

const notFoundPage = () => {
  useScrollToTop();
  return (
    <section className="section">
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="text-primary fw-bold">
              Page under construction. We are working to provide you with the
              best service. Thank you for your understanding.
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
};

export default notFoundPage;
