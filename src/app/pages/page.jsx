import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Hero from "@/components/sub-components/Hero";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blogs />
      <Contact />
    </>
  );
}