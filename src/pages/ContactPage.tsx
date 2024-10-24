import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useEmail from "../hooks/useSendEmail";
import Swal from "sweetalert2";
import { useState } from "react";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  message: Yup.string().required("The message is required"),
  nombre: Yup.string().required("Name is required"),
  telefono: Yup.string().required("Phone number is required"),
});

const ContactPage = () => {
  const { loading, error, sendMail, success } = useEmail();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await sendMail({
        subject: `Contact form from ${values.email}`,
        text: values.message,
      });
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
    <section className="section">
      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 pt-2 pt-sm-0 order-2 order-md-1">
            <div className="card shadow rounded border-0">
              <div className="card-body py-5">
                <h4 className="card-title">Contact us now!</h4>
                <div className="custom-form mt-3">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Name:<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.nombre}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.nombre}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Email:<span className="text-danger">*</span>
                        </label>
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <label className="form-label">
                          Phone: <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          id="telefono"
                          name="telefono"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.telefono}
                        />
                        {formik.touched.message && formik.errors.message ? (
                          <div className="text-danger">
                            {formik.errors.telefono}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <label className="form-label">
                          Message: <span className="text-danger">*</span>
                        </label>
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            {loading ? "Sending..." : "Send"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 order-1 order-md-2">
            <div className="row">
              <div className="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <FaPhone className="rounded h3 mb-0" />
                  </div>
                  <div className="content mt-4">
                    <h5 className="fw-bold">Phone</h5>
                    <p className="text-muted">
                      If you have any questions or would like more information,
                      please call us.
                    </p>
                    <a href="tel:+1-562-513-82-13" className="read-more">
                      +1 562 513 82 13
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center features feature-primary feature-clean">
                  <div className="icons text-center mx-auto">
                    <IoMail className="rounded h3 mb-0" />
                  </div>
                  <div className="content mt-4">
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">
                      Send us an email and we will get back to you as soon as
                      possible.
                    </p>
                    <a
                      href="mailto:sdavalos@corazonhawaii.org"
                      className="read-more"
                    >
                      sdavalos@corazonhawaii.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
