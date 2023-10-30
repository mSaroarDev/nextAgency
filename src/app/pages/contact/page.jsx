import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import BackToHome from "@/components/sub-components/BackToHome";


export default function ContactPage() {
  return (
    <>
    <div>
      <main>
        <BackToHome />
      </main>
    </div>
      <Contact />
      <About />
    </>
  );
}
