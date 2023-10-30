import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import BackToHome from "@/components/sub-components/BackToHome";

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-50">
        <main>
          <BackToHome />
        </main>
      </div>
      <About />
      <Services />
      <Contact />
    </>
  );
}
