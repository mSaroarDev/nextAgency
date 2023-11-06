"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {

  const router = useRouter();

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values, { resetForm }) => {

      if (!values.email || !values.password) {
        showError("All fields are required");
      } else {
        const res = await fetch("/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })

        
        if(res.status === 401){
          showError("Wrong Credentials");
        }else if(res.status === 200){
          showSuccess("Login Successfull");
          resetForm();
          router.refresh();
          router.replace("/dashboard")
        }else{
          showError("Login failed!")
        }
      }
      
    },
  });
  
  return (
    <>
    <Toaster />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="example@email.com"
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="******"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn-brand mt-2">
          Login
        </button>
      </form>
    </>
  );
}
