import Image from "next/image";
import Link from "next/link";
import aboutImage from "public/about.webp";

export default function About() {
  return (
    <>
      <div className="bg-slate-50 py-[120px]">
        <main className="h-[300px] w-full flex items-center justify-around gap-12">
          <div className="w-1/2">
            <Image src={aboutImage} height={600} width={600} alt="Loading" />
          </div>
          <div className="w-1/2">
            <div className="section__header">
              <h2 className="text-2xl font-bold my-5">About Us</h2>
            </div>

            <p>
              At NextAgency, we are a passionate team of creative professionals
              dedicated to bringing your brands vision to life. With a shared
              commitment to innovation and excellence, we specialize in crafting
              unique digital experiences, strategic marketing solutions, and
              impactful design.
              <br />
              Our journey began with a vision to redefine the boundaries of
              creativity and to empower businesses to thrive in the digital age.
              With a relentless pursuit of excellence and a portfolio filled
              with success stories, we invite you to join us on this exciting
              adventure and discover how we can transform your brand into
              something extraordinary. We are more than just an agency; we are
              your partners in growth and success.
            </p>

            <Link href={"/"} className="btn-brand my-5">
              Read More
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
