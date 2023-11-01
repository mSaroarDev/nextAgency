import ContactsAdmin from "@/components/sub-components/ContactsAdmin";
import { PrismaClient } from "@prisma/client";

export default async function TaskGroupPage() {

  const prisma = new PrismaClient();
  const contacts = await prisma.contact_form.findMany({
    orderBy: {
      id: "desc"
    }
  })

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Who wants to contact you</h2>
        {/* <Link href={"/dashboard/services/new"} className="btn-brand">Add New Blog Post</Link> */}
    </div>
      <div className="task-groups flex flex-col gap-3 mt-7">
        {
          contacts && contacts.map((contact, index)=>{
            return (
              <div key={contact.id}>
                <ContactsAdmin contact={contact} index={index} />
              </div>
            )
          })
        }
        
      </div>
    </>
  );
}