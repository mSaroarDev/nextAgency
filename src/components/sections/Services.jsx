import ServiceCard from "../sub-components/ServiceCard";
import prisma from '@/lib/db';

export default async function Services() {

  const services = await prisma.service.findMany({
    orderBy: {
      id: "desc"
    }
  })

  return (
    <>
      <div className="bg-white py-[120px]">
        <main>
          <div className="section__header text-center mb-7">
            <h2 className="text-2xl font-bold mb-10 inline-block">Services</h2>
          </div>

          <div className="flex items-start justify-center">
            {
              services && services.map((service)=> {
                return (
                  <div key={service.id}>
                    <ServiceCard title={service.title} text={service.text} />
                  </div>
                )
              })
            }
          </div>
        </main>
      </div>
    </>
  );
}
