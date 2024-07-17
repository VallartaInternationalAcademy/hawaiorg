import React from "react";
import logo from "../assets/images/logoBlanco.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60">
              <div className="row">
                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                  <a href="#" className="logo-footer">
                    <img src={logo} style={{ height: "100px" }} alt="" />
                  </a>
                  <p className="mt-4">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Site Map</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> What do
                        we do
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Donate
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Contact us</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Telefono
                        1
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Telefono
                        2
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Donate
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Social</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> Tik tok
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="text-foot">
                        <i className="uil uil-angle-right-b me-1"></i> X
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-py-30 footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-start">
                <p className="mb-0">
                  ©2024 HAWAI ORG <i className="mdi mdi-heart text-danger"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
