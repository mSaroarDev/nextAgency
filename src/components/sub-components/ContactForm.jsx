"use client";

import { useFormik } from "formik";
import toast from "react-hot-toast";

export default function ContactForm() {
  // alert
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 200) {
        showSuccess("Message sent successfully");
        resetForm();
      } else {
        showError("Message Sending Failed");
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Name"
          className="input input-bordered w-full "
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          className="input input-bordered w-full "
        />
        <textarea
          id="massage"
          name="massage"
          value={formik.values.massage}
          onChange={formik.handleChange}
          className="textarea textarea-bordered resize-none"
          placeholder="Message"
        ></textarea>
        <button className="btn-brand" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}
