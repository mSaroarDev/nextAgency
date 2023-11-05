import BlogCard from "@/components/sub-components/BlogCard";
import prisma from "@/lib/db";

export default async function Blogs() {
  const blogData = await prisma.blog.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <>
      <div className="bg-slate-50 py-[120px]">
        <main>
          <div className="section__header text-center">
            <h2 className="text-2xl font-bold mb-10 inline-block">
              Recent Blogs
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {blogData &&
              blogData.map((blog) => {
                return (
                  <div key={blog.id}>
                    <BlogCard data={blog} />
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
}
