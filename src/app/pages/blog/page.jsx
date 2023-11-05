import Blogs from "@/components/sections/Blog";
import BlogCard from "@/components/sub-components/BlogCard";
import BackToHome from "@/components/sub-components/BackToHome";
import Navbar from "@/components/sub-components/Navbar";
import Footer from "@/components/sub-components/Footer";

export const revalidate = 0;
export default function BlogsPage() {
  return (
    <>
    <div className="bg-slate-100">
      <Navbar />
    <main>
      <BackToHome />
    </main>
    </div>
      <div className="-mt-24">
      <Blogs />
      </div>
      <Footer />
    </>
  );
}
