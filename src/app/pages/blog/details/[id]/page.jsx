import Footer from "@/components/sub-components/Footer";
import Navbar from "@/components/sub-components/Navbar";
import prisma from "@/lib/db";
import DateConvert from "@/utils/DataConvert";
import Image from "next/image";

export default async function BlogDetails({ params }) {
  const { id } = params;

  const date = (dbDate) => DateConvert(dbDate);

  const blogdata = await prisma.blog.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return (
    <>
      <Navbar />
      <div className="container w-full max-w-5xl mx-auto my-5 bg-slate-100 shadow-md rounded-xl p-10 mt-24">
        <h1>Home » Blogs » {blogdata.title}</h1>

        <h1 className="text-3xl font-bold my-8">{blogdata.title}</h1>
        <p>Posted at {date(blogdata.created_at)}</p>
        <Image
          src={blogdata.featured_image}
          height={300}
          width={700}
          alt="Featured Image"
          className="rounded-xl my-3"
        />

        <div className="mt-10" dangerouslySetInnerHTML={{ __html: blogdata.description }} />
      </div>

      <Footer />
    </>
  );
}
