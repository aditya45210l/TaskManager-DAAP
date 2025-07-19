'use client';
import { useTaskStore } from "@/store/TaskStore";
import PaginationCompo from "./Pagination";
import { TaskCard } from "./TaskCard";
import { tasks } from "./dummyData";
import { useEthPrice } from "@/hooks/useEthPrice";
const DashTaskContain = ({type}:{type:string}) => {
  const fillteredTasks = useTaskStore((state) => state.filterTasks);
  console.log("Filltered tasks from:", fillteredTasks);
  const _tasks = type === "dashboard" ? fillteredTasks.slice(0, 6) : fillteredTasks.slice(0, 12);
  const { data: ethPrice, isLoading } = useEthPrice();
  
  console.log("ETH price to be displayed:", ethPrice);
  if(isLoading){
    return <p>loading....</p>
  }
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 lg:gap-12 xl:gap-4 ">
        {_tasks ? _tasks?.map((task) => {
          return <TaskCard key={task.id} {...task} ethPrice={Number(ethPrice.usd)} />;
        }): null
      }
      </div>
      <div>
        <PaginationCompo />
      </div>
    </div>
  );
};
export default DashTaskContain;
