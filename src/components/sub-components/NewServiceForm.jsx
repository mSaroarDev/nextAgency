"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewServiceForm({ uid }) {
  // router
  const router = useRouter();

  // toast
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  // loading screen
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
      created_by: uid,
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const res = await fetch(url + "/api/service/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!values.title || !values.text) {
          showError("All fields required");
        } else if (res.status === 200) {
          showSuccess("Service created successfully");
          resetForm();
          router.refresh();
        } else {
          showError("Failed");
        }
      } catch (error) {
        showError("Failed");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Toaster />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <h1 className="text-lg font-bold mb-10">Create a new service</h1>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <label htmlFor="text">Short Description</label>
        <textarea
          className="textarea textarea-bordered"
          id="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text}
          placeholder="Type here"
        ></textarea>
        {loading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            Please Wait
          </button>
        ) : (
          <button type="submit" className="btn-brand">
            Create
          </button>
        )}

      </form>
    </>
  );
}
