"use client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


export default function LogoutButton() {

  const router = useRouter()

  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);

  const handleLogout = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/user/logout");
    console.log(res)
    if (res.status === 200) {
      showSuccess("Logout Success");
      router.refresh();
      router.replace("/");
    }else{
      showError("Logout Error");
    }

  }
    
  return (
    <>
    <Toaster />
      <div onClick={()=> handleLogout()} className="side-links cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        Sign out
      </div>
    </>
  );
}
