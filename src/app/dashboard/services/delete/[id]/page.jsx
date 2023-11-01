import NewServiceForm from "@/components/sub-components/NewServiceForm";
import ServiceDeleteConfirm from "@/components/sub-components/ServiceDelete";

export default function DeleteService({ params }) {
  const { id } = params;

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="box w-[700px] h-auto bg-slate-100 p-10 rounded-md shadow-md">
          <div className="flex flex-col gap-3">
            <ServiceDeleteConfirm id={parseInt(id)} />
          </div>
        </div>
      </div>
    </>
  );
}
