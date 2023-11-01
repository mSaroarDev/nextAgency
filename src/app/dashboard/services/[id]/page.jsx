import ContactDetails from '@/components/sub-components/ContactDetails';
import ServiceCard from '@/components/sub-components/ServiceCard';
import prisma from '@/lib/db';
import { PrismaClient } from '@prisma/client';

export default async function EditFolderName({params}) {

    const id = params.id;
    const prisma = new PrismaClient();

    const data = await prisma.service.findUnique({
      where: {
        id: parseInt(id)
      }
    })

  return (
    <>
      <div className="w-full h-[600px] flex items-center justify-center">
        <ServiceCard title={data.title} icon={data.svg_code} text={data.text} />
      </div>
    </>
  );
}
