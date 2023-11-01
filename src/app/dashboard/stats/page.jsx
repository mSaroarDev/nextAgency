import StatCard from "@/components/sub-components/StatCard";
import { PrismaClient } from "@prisma/client";

export default async function StatPage() {

  const prisma = new PrismaClient();

  const totalServices = await prisma.service.count();
  const totalBlogs = await prisma.blog.count();
  const totalContacts = await prisma.contact_form.count();
  const totalSubscriptions = await prisma.newletter.count();

  return (
    <>
      <div className="stats flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-lg font-bold">Statistics</h1>
      </div>

      <div className="cards p-5 flex items-start justify-start gap-5">
        <StatCard title="Total Services" count={totalServices} />
        <StatCard title="Total Blogs" count={totalBlogs} />
        <StatCard title="Total Contacts" count={totalContacts} />
        <StatCard title="Total Subscriptions" count={totalSubscriptions} />
      </div>
    </>
  );
}
