import ServiceCardAdmin from "@/components/sub-components/ServiceCardAdmin";
import Link from "next/link";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

export default async function TaskGroupPage() {

  const prisma = new PrismaClient()

  const services = await prisma.service.findMany();

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">All Services</h2>
        <Link href={"/dashboard/services/new"} className="btn-brand">Add New Service</Link>
    </div>
      <div className="task-groups flex flex-col gap-3 mt-7">
        {
          services && services.map((service, index)=>{
            return (
              <div key={service.id}>
                <ServiceCardAdmin data={service} index={index} />
              </div>
            )
          })
        }
      </div>
    </>
  );
}
