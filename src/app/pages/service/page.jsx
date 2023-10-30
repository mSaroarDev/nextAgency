import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import BackToHome from "@/components/sub-components/BackToHome";

export default function ServicesPage() {
  return (
    <div>
      <main>
        <BackToHome />
      </main>
      <div className="-mt-24">
        <Services />
      </div>
      <Contact />
    </div>
  );
}
