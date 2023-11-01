import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Footer from "@/components/sub-components/Footer";
import Hero from "@/components/sub-components/Hero";
import Navbar from "@/components/sub-components/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
