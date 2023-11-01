import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import BackToHome from "@/components/sub-components/BackToHome";
import Footer from "@/components/sub-components/Footer";
import Navbar from "@/components/sub-components/Navbar";


export default function ContactPage() {
  return (
    <>
    <div>
      <Navbar />
      <main>
        <BackToHome />
      </main>
    </div>
      <Contact />
      <About />
      <Footer />
    </>
  );
}
