"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ServiceDeleteConfirm({ id }) {
  const formik = useFormik({
    initialValues: {
      id: id,
    },
    onSubmit: async (values) => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/service/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!res.status === 200) {
        showError("Failed to delete");
      } else if (res.status === 200) {
        showSuccess("Successfully Deleted");
        router.push(process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/services");
        router.refresh();
      }
    },
  });

  const router = useRouter();

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <h3 className="text-lg text-center font-bold mb-10">
          Are you sure you want to delete the Service from here?
        </h3>

        <button
          type="submit"
          className="btn bg-red-500 text-white hover:bg-red-500/20 hover:text-red-500"
        >
          Yes, Delete
        </button>
        <button className="btn btn-neutral">No, Back</button>
      </form>
    </>
  );
}
