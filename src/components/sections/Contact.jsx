import Image from "next/image";
import aboutImage from "public/about.webp";
import ContactForm from "../sub-components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="bg-white py-[120px]">
        <main className="h-[300px] w-full flex items-center justify-around gap-12">
          <div className="w-1/2">
            <Image src={aboutImage} height={600} width={600} alt="Loading" />
          </div>
          <div className="w-1/2">
            <div className="form w-full bg-slate-50 shadow-md p-10 rounded-md m-5">
              <div className="section__header">
                <h2 className="text-2xl font-bold my-5">Contact Us</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
