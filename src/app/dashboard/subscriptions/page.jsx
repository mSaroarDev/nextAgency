import SubscriptionsAdmin from "@/components/sub-components/SubscriptionsAdmin";
import prisma from "@/lib/db";


export default async function TaskGroupPage() {


    const subscriptions = await prisma.newletter.findMany({
      orderBy: {
        id: "desc"
      }
    });
    const subscriptionsCount = await prisma.newletter.count();

  return (
    <>
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Subscriptions ({subscriptionsCount})</h2>
        {/* <Link href={"/dashboard/services/new"} className="btn-brand">Add New Blog Post</Link> */}
    </div>
      <div className="task-groups flex flex-col gap-3 mt-7">
        {
            subscriptions && subscriptions.map((subscription, index)=>{
                return (
                    <div key={subscription.id}><SubscriptionsAdmin data={subscription} index={index}/></div>
                )
            })
        }
        
      </div>
    </>
  );
}