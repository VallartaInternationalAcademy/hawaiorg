import logo from "../assets/images/logoLigth.png";
// react icons social medias
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import useEmail from "../hooks/useSendEmail";
import { useState } from "react";

const Footer = () => {
  const { sendEmail, loading, error } = useEmail();
  const [toEmail, setToEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail(toEmail, message);
  };
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
                    Empowering homeless families to rebuild their lives,
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

                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Contact Us</h5>
                  {/* contact form */}
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <label htmlFor="email">Email:</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        required
                        onChange={(e) => setToEmail(e.target.value)}
                      />
                    </li>
                    <li>
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className="form-control"
                        id="message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </li>
                    <li>
                      <button
                        className="btn btn-light mt-3"
                        onClick={(e) => handleSubmit(e)}
                      >
                        {loading ? "Loading" : "Send"}
                        <IoMdSend className="text-muted my-auto" />
                      </button>
                    </li>
                  </ul>
                  {error && <p>{error}</p>}
                </div>
                {/* redes sociales */}
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Social Media</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaFacebookF className="pe-2" />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaInstagram className="pe-2" />
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaTwitter className="pe-2" />
                        Twitter
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
                  © Corazon Hawaii. All Rights Reserved 2023
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
