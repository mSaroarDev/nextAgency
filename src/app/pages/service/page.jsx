import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import BackToHome from "@/components/sub-components/BackToHome";
import Footer from "@/components/sub-components/Footer";
import Navbar from "@/components/sub-components/Navbar";

export const revalidate = 0;
export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <main>
        <BackToHome />
      </main>
      <div className="-mt-24">
        <Services />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
