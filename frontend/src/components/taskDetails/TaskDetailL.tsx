import { FileUp } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ShortPath from "../layout/ShortPath";
import { TaskCardProps } from "@/app/(web3)/tasks/[taskId]/page";

const TaskDetails_L = ({
  task,
  type,
}: {
  task: TaskCardProps
  type: "details" | "claim";
}) => {
  const statusClasses = {
    Open: "bg-sky-700 text-sky-100",
    Progress: "bg-yellow-600 text-yellow-100",
    Verifying: "bg-indigo-600 text-indigo-100",
    Completed: "bg-emerald-700 text-emerald-100",
  };
  return (
    <div className="text-white py-4 px-5 bg-medium-dark rounded-md flex flex-col flex-1 gap-10">
      <section className="flex flex-col gap-4">
        {type === "details" ? <ShortPath /> : null}
        {/* Task title seciton container! */}
        <div className="flex justify-between flex-wrap">
          {/* Task Title*/}
          <span className="flex flex-col gap-1">
            <h1 className="md:text-3xl text-2xl font-outfit tracking-wide">
              Design UI/UX for dApp Dashboard
            </h1>
            <span className="text-sm ">
              Posted by{" "}
              <p className="text-blue-btn inline font-semibold">
                {"Aditya Singh"}
              </p>
            </span>
          </span>
          {/* Button section */}
          {/* <span className="flex flex-row gap-2 flex-wrap"> */}
          {/* Edit Button */}
          {/* <Button
                variant={"destructive"}
                className="rounded-md cursor-pointer bg-gray-500/20 hover:bg-gray-500/50 flex flex-row gap-1 items-center"
              >
                <span>
                  <Pencil strokeWidth={2.5} size={20} />
                </span>{" "}
                <p>Edit</p>
              </Button> */}
          {/* Delete Button */}
          {/* <Button
                variant={"destructive"}
                className="rounded-md cursor-pointer bg-red-500/20 hover:bg-red-500/50 flex flex-row gap-1 items-center"
              >
                <span>
                  <Trash2 strokeWidth={2.5} size={20} />
                </span>{" "}
                <p>Delete</p>
              </Button> */}
          {/* </span> */}
        </div>
      </section>
      {/* Task Details Section Container! */}
      <section>
        <span>
          <p className="md:text-xl tracking-wide font-semibold text-lg ">
            Task Details
          </p>
        </span>
        <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>
        <div className="grid grid-cols-[auto_auto] gap-8 grid-rows-[auto_auto_auto_auto] py-5 text-gray-400 text-sm font-medium">
          <div className="">Description</div>
          <div className="text-gray-300 text-sm font-medium">
            {task.description}
          </div>
          <div className="">Reward</div>
          <div className=" flex gap-2 flex-row  tracking-wide">
            <p>{task.currency === "ETH" ? `${task.reward}00` : task.reward}</p>{" "}
            <p>{task.currency}</p>
          </div>
          <div className="">Deadline</div>
          <div className=" tracking-wide">{task.dueDate}</div>
          <div className="">Status</div>
          <div className=" tracking-wide">
            <Badge className={`${statusClasses[task.status]} leading-relaxed`}>
              {task.status}
            </Badge>
          </div>
        </div>
      </section>
      {/* Submit Your Work Container! */}
      {type === "details" ? (
        <>
          <section>
            <span className="b">
              <p className="md:text-xl tracking-wide font-semibold text-lg ">
                Task Details
              </p>
            </span>
            <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>
            <div className="py-3 flex flex-col gap-4">
              <span>
                <p className="text-gray-400 text-sm font-medium mb-1.5">
                  Submission Details
                </p>
                <span>
                  <textarea
                    className="textArea-form"
                    placeholder="Provide a detailed description of your submission, including links to relevant files or deliverables."
                    id="description"
                  />
                </span>
              </span>
              <Button
                type="submit"
                className="rounded-sm text-white cursor-pointer hover:bg-blue-btn/80 w-fit ml-auto"
              >
                {" "}
                <FileUp strokeWidth={2} />
                <p>Submit Work</p>
              </Button>
            </div>
          </section>
          {/* <section>
          <span>
            <p className="md:text-xl tracking-wide font-semibold text-lg ">Comments & Clarificatons</p>
          </span>
          <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>

        </section> */}
        </>
      ) : (
        <div>
          <Button>Claim</Button>
        </div>
      )}
    </div>
  );
};
export default TaskDetails_L;
