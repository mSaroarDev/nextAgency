export default function StatCard({title, count}) {
    return (
      <>
        <div className="stat_box w-52 h-36 shadow-md rounded-md flex flex-col gap-4 items-center justify-center">
          <h3 className="text-5xl font-bold">{count}</h3>
          <p className="text-bold">{title}</p>
        </div>
      </>
    );
  }
  