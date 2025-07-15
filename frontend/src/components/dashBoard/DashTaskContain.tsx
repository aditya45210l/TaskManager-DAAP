import PaginationCompo from "./Pagination";
import { TaskCard } from "./TaskCard";
import { tasks } from "./dummyData";

const DashTaskContain = ({type}:{type:string}) => {
  

  const _tasks = type === "dashboard" ? tasks.slice(0, 4) : tasks.slice(0, 12);
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-rows-4 sm:grid-rows-2 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-12 xl:gap-4 ">
        {_tasks.map((task, index) => {
          return <TaskCard key={index} {...task} />;
        })}
      </div>
      <div>
        <PaginationCompo />
      </div>
    </div>
  );
};
export default DashTaskContain;
