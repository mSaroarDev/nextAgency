import NewServiceForm from "@/components/sub-components/NewServiceForm";
import { headers } from "next/headers";

export default function NewService(){

    const headerList = headers();
    const uid = parseInt(headerList.get("id"));

    return (
      <>
      <div className="flex items-center justify-center">
      <div className="box w-[700px] h-auto bg-slate-100 p-10 rounded-md shadow-md">
        <div className="flex flex-col gap-3">
            <NewServiceForm uid={uid} />
        </div>
      </div>
      </div>
      </>
    )
}