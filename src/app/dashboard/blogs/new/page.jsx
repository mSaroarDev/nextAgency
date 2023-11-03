import NewBlogForm from "@/components/sub-components/NewBlogForm";
import NewServiceForm from "@/components/sub-components/NewServiceForm";
import { headers } from "next/headers";

export default function NewBlog(){

    const headerList = headers();
    const uid = parseInt(headerList.get("id"));

    return (
      <>
      <div className="flex items-center justify-center">
      <div className="box w-full h-auto bg-slate-100 p-10 rounded-md shadow-md">
        <div className="flex flex-col gap-3">
            <NewBlogForm />
        </div>
      </div>
      </div>
      </>
    )
}