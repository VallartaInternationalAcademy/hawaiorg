import React from "react";
import banner from "../assets/images/charity/cta.jpg";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section
      className="bg-cta"
      id="volunteer"
      style={{ background: `url('${banner}') center` }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="card p-4 border-0 rounded">
              <div className="section-title">
                <h4 className="title mb-4">Make a Donation</h4>
                <p className="mb-0 text-muted">
                  Your $40.00 monthly donation can give 12 people clean water
                  every year. 100% funds water projects.
                </p>
              </div>

              <form className="mt-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">
                        Your Name :{" "}
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Name :"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">
                        {" "}
                        Your Mail :{" "}
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your Mail :"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label small fw-bold">
                        Phone No. :{" "}
                      </label>
                      <input
                        name="number"
                        type="number"
                        className="form-control"
                        id="number2"
                        placeholder="Phone :"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <Link
                      to={"page_no_found/"}
                      id="donatefund"
                      className="btn btn-primary"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          ¿
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
