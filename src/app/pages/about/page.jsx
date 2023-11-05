import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import BackToHome from "@/components/sub-components/BackToHome";
import Footer from "@/components/sub-components/Footer";
import Navbar from "@/components/sub-components/Navbar";

export const revalidate = 0;
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50">
        <main>
          <BackToHome />
        </main>
      </div>
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
