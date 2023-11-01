"use client";

import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function EmailSubscriptForm() {
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        if (!values.email) {
          showError("Email Required");
        } else {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          if (res.status === 200) {
            showSuccess("Subscription Success");
            resetForm();
          }
        }
      } catch (error) {
        showError("Subscription Failed");
      }
    },
  });

  return (
    <>
      <Toaster />
      <form onSubmit={formik.handleSubmit}>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-brandColor text-white hover:bg-brandColor/20 hover:text-brandColor absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
