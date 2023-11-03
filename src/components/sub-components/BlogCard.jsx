import DateConvert from "@/utils/DataConvert";
import Image from "next/image";
import Link from "next/link";
import blogImage from "public/blogimage.jpg";

export default function BlogCard({data}) {

  const date = (dbDate) => DateConvert(dbDate);

  return (
    <>
      <Link href={"/pages/blog/details/" + data.id}>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <figure>
            <Image src={data.featured_image} height={320} width={320} alt="Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.short_des}</p>
            <div className="card-actions justify-end text-xs">
              published {date(data.created_at)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
