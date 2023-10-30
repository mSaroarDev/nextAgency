import Image from "next/image";
import Link from "next/link";
import blogImage from "public/blogimage.jpg";

export default function BlogCard() {
  return (
    <>
      <Link href={"/"}>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <figure>
            <Image src={blogImage} height={320} width={320} alt="Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end text-xs">
              published 10th Feb, 2023
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
