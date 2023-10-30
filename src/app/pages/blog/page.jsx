import Blogs from "@/components/sections/Blog";
import BlogCard from "@/components/sub-components/BlogCard";
import BackToHome from "@/components/sub-components/BackToHome";

export default function BlogsPage() {
  return (
    <>
    <div className="bg-slate-100">
    <main>
      <BackToHome />
    </main>
    </div>
      <div className="-mt-24">
      <Blogs />
      </div>
    </>
  );
}
