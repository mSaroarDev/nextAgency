import Image from "next/image";
import Link from "next/link";
import heroImage from 'public/hero.jpg';

export default function Hero() {
  return (
    <>
      <div>
        <main>
          <div className="h-[700px] w-full flex items-center justify-between">
            <div className="w-1/2">
              <p>
                Welcome to{" "}
                <span className="text-brandColor font-bold">NextAGENCY</span>
              </p>
              <h1 className="text-5xl font-bold my-4">
                Your Gateway to Creative Excellence
              </h1>
              <p>
                Fueling Imagination, We Craft Stories. <br /> Your Success, Our
                Passion.
              </p>
              <Link href={"/pages/register"} className="btn bg-brandColor text-white hover:bg-brandColor/20 hover:text-brandColor mt-5">Register Now</Link>
            </div>
            <div>
                <Image src={heroImage} height={800} width={800} alt="hero image"/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
