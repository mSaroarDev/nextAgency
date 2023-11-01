import Link from "next/link";
import { headers } from "next/headers";
import BlogsAdmin from "@/components/sub-components/BlogsAdmin";

export default async function TaskGroupPage() {
  // returning the logged user
  const headerList = headers();
  const userId = headerList.get("id");

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent Blogs</h2>
        <Link href={"/dashboard/services/new"} className="btn-brand">Add New Blog Post</Link>
    </div>
      <div className="task-groups flex flex-col gap-3 mt-7">
        <BlogsAdmin />
        <BlogsAdmin />
        <BlogsAdmin />
        <BlogsAdmin />
        <BlogsAdmin />
      </div>
    </>
  );
}