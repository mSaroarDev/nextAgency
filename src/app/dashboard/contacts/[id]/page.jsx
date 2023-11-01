import ContactDetails from '@/components/sub-components/ContactDetails';
import prisma from '@/lib/db';

export default async function EditFolderName({params}) {

    const id = params.id;
    const data = await prisma.contact_form.findUnique({
      where: {
        id: parseInt(id)
      }
    })

  return (
    <>
      <div className="w-full h-[600px] flex items-center justify-center">
        <ContactDetails data={data}/>
      </div>
    </>
  );
}
