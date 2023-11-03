import Link from "next/link";
import BlogsAdmin from "@/components/sub-components/BlogsAdmin";
import prisma from  '@/lib/db';

export default async function TaskGroupPage() {
  // returning the logged user
  // const headerList = headers();
  // const userId = headerList.get("id");

  // get blogs
  const blogs = await prisma.blog.findMany({
    orderBy: {
      id: "desc"
    },
    take: 10
  })

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent Blogs</h2>
        <Link href={"/dashboard/blogs/new"} className="btn-brand">Add New Blog Post</Link>
    </div>
      <div className="task-groups flex flex-col gap-3 mt-7">

        {
          blogs && blogs.map((blog)=> {
            return (
              <div key={blog.id}><BlogsAdmin data={blog} /></div>
            )
          })
        }

      </div>
    </>
  );
}