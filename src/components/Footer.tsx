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
import useEmail from "../hooks/useSendEmail";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  message: Yup.string().required("The message is required"),
});

const Footer = () => {
  const { loading, error, sendEmail } = useEmail();

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await sendEmail(values.email, values.message);
      if (!error) {
        Swal.fire({
          title: "Form Submitted",
          text: `Thank you for contacting us. We will get back to you soon.`,
          icon: "success",
          confirmButtonText: "OK",
        });
        formik.resetForm();
      } else {
        Swal.fire({
          title: "Error",
          text: `There was an error sending the email. Please try again later.`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });
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
                  <form onSubmit={formik.handleSubmit}>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <label htmlFor="email">Email:</label>
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </li>
                      <li>
                        <label htmlFor="message">Message:</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (
                          <div className="text-danger">
                            {formik.errors.message}
                          </div>
                        ) : null}
                      </li>
                      <li>
                        <button className="btn btn-light mt-3">
                          {loading ? "Sending..." : "Send"}
                          <IoMdSend className="text-muted my-auto" />
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
                {/* redes sociales */}
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="footer-head">Social Media</h5>
                  <ul className="list-unstyled footer-list mt-4">
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaFacebookF className="pe-2 fs-3" />
                        <span className="fw-bold">Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaInstagram className="pe-2 fs-3" />
                        <span className="fw-bold">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="text-foot">
                        <FaXTwitter className="pe-2 fs-3" />
                        <span className="fw-bold">X</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="text-foot">
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
