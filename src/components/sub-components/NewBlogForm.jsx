"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function NewBlogForm() {
  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  // taost
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading screen
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const imageUpload = async () => {
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", "full_stack_blog");
      data.append("cloud_name", "ahnaf");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ahnaf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const res2 = await res.json();
      setImgUrl(res2.url);
      return res2.url;
    } else {
      return "";
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      short_des: "",
      description: value,
      featured_image: "",
    },

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const data = await imageUpload();
      values.featured_image = data;
      // You can access the description from formik.values.description
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/blogs/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (res.status !== 200) {
          showError("Failed");
        } else if (res.status === 200) {
          showSuccess("Succefully Created");
          resetForm();
          setSelectedImage(null);
          formik.setFieldValue("");
          router.refresh();
          router.push(process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/blogs");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <h3 className="my-4 text-xl font-bold">Create New Blog</h3>
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <label htmlFor="short_des">Short Description</label>
        <textarea
          id="short_des"
          name="short_des"
          value={formik.values.short_des}
          onChange={formik.handleChange}
          className="textarea textarea-bordered resize-none"
          placeholder="Type Here"
        ></textarea>

        <div className="textarea textarea-bordered h-80 mb-10 p-5">
          <ReactQuill
            theme="snow"
            className="w-full h-4/5"
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
          />
        </div>

        <label htmlFor="image">Featured Image</label>
        <input
          type="file"
          id="featured_image"
          name="featured_image"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          className="file-input file-input-bordered w-full max-w-xs"
        />

        {loading ? (
          <button className="btn btn-wide mt-5">
            <span className="loading loading-spinner"></span>
            Please Wait
          </button>
        ) : (
          <button type="submit" className="btn-brand btn-wide mt-5">
            Create
          </button>
        )}
      </form>
    </>
  );
}
