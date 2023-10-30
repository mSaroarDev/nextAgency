import BlogCard from "@/components/sub-components/BlogCard";

export default function Blogs() {
  return (
    <>
      <div className="bg-slate-50 py-[120px]">
        <main>
          <div className="section__header text-center">
            <h2 className="text-2xl font-bold mb-10 inline-block">Recent Blogs</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </main>
      </div>
    </>
  );
}
