import logo from "../assets/images/logoLigth.png";

import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-py-60">
              <div className="row">
                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                  <a href="#" className="logo-footer">
                    <img src={logo} height="84" alt="" />
                  </a>
                  <p className="mt-4">
                    Empowering homeless households to rebuild their lives,
                    reconnect with their community, and achieve lasting
                    stability through compassionate support and advocacy.
                    Together, we can end homelessness.
                  </p>
                </div>

                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Page</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link to={"/"} className="text-foot">
                        <FaAngleRight className="me-1" /> Home
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about"} className="text-foot">
                        <FaAngleRight className="me-1" /> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"/what-do-we-do"} className="text-foot">
                        <FaAngleRight className="me-1" /> What We Do
                      </Link>
                    </li>
                    <li>
                      <Link to={"/stories"} className="text-foot">
                        <FaAngleRight className="me-1" /> Stories
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Services</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link to={"services/4"} className="text-foot">
                        <div className="d-flex justify-content-start">
                          <div>
                            <FaAngleRight className="me-1" />
                          </div>
                          <div>
                            Family Assesment Center
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"service/1"} className="text-foot">
                        <div className="d-flex justify-content-start">
                          <div>
                            <FaAngleRight className="me-1"/>
                          </div>
                          <div>
                            Housing Navigation
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"service/2"} className="text-foot">
                        <div className="d-flex justify-content-start">
                          <div>
                            <FaAngleRight className="me-1"/>
                          </div>
                          <div>
                            Housing Retention
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={"service/3"} className="text-foot">
                        <div className="d-flex justify-content-start">
                          <div>
                            <FaAngleRight className="me-1"/>
                          </div>
                          <div>
                            Rapid Rehousing and Homeless Prevention
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* redes sociales */}
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Social Media</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link
                        to={
                          "https://www.facebook.com/profile.php?id=61567033898891"
                        }
                        className="text-foot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookF className="pe-2 fs-3" />
                        <span className="fw-bold">Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://www.instagram.com/corazonhawaii_/"}
                        className="text-foot"
                        target="_blank"
                      >
                        <FaInstagram className="pe-2 fs-3" />
                        <span className="fw-bold">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://x.com/CorazonHawaii"}
                        className="text-foot"
                        target="_blank"
                      >
                        <FaXTwitter className="pe-2 fs-3" />
                        <span className="fw-bold">X</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://www.youtube.com/@CorazonHawaii"}
                        className="text-foot"
                        target="_blank"
                      >
                        <FaYoutube className="pe-2 fs-3" />
                        <span className="fw-bold">Youtube</span>
                      </Link>
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
                  © Corazon Hawaii. All Rights Reserved 2024
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
