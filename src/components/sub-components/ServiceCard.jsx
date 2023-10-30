
export default function ServiceCard({title, icon, text}){
    return (
      <>
      <div className="box w-80 mx-3 bg-slate-100 rounded-md p-10 flex flex-col items-center justify-start gap-8">
              <div className="h-20 w-20 rounded-full bg-brandColor/20 flex items-center justify-center">
                {icon}
              </div>
              <h3 className="uppercase font-bold text-lg">
                {title}
              </h3>
              <p className="italic -mt-5 text-center">{text}</p>
            </div>
      </>
    )
}   