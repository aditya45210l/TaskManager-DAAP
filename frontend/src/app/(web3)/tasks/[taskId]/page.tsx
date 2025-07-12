
import TaskDetails_L from "@/components/taskDetails/TaskDetailL";

import { Button } from "@/components/ui/button";

import { Flag, Gavel, Star, } from "lucide-react";
import Image from "next/image";

export interface TaskCardProps {
  title: string;
  description: string;
  status: "Open" | "Progress" | "Completed" | "Verifying";
  creator: string;
  reward: number;
  currency: string;
  usdEquivalent: number;
  tags: string[];
  rating: number;
  dueDate: string;
}

const TaskDetails = ({params}:{params:{taskId:string}}) => {
  const task: TaskCardProps = {
    title: "Develop Smart Contract for NFT Marketplace",
    description:
      "Seeking an experienced Solidity developer to create a secure and efficient smart contract for our upcoming NFT marketplace.",
    status: "Verifying",
    creator: "AliceCryptoDev",
    reward: 0.5,
    currency: "ETH",
    usdEquivalent: 1500,
    tags: ["Solidity", "ERC-721", "NFT", "Marketplace"],
    rating: 4.2,
    dueDate: "2024-04-15",
  };

  return (
    <div className="flex flex-row gap-5">
      {/* this is the left side of task detailed page */}
      <TaskDetails_L task={task} type="details"/>
      {/* tis is the Right side of the task detailed page! */}
      <div className="max-w-1/3 text-white py-4 lg:px-6 px-4 bg-medium-dark rounded-md md:flex flex-col gap-10 hidden">
        {/* Task creater Details */}
        <section className="flex flex-col gap-4">
          <span>
            <p className="md:text-xl tracking-wide font-semibold text-lg leading-relaxed">
              Task Creator Details
            </p>
            <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>
          </span>
          <div className="flex flex-row gap-2 items-center">
            {/* Creater Avtar */}
            <Image
              width={24}
              height={24}
              src={"/landing/nft.png"}
              alt="avtar"
              className="h-12 w-12 rounded-full border-2 border-gray-500"
            />
            {/* Creater Details */}
            <span className="flex flex-col">
              <p className="font-semibold">{task.creator}</p>
              <p className="text-gray-400 text-xs">Joined: {"Jan 2024"}</p>
            </span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300 font-semibold">
            <div>5.0 Rating (25 Reviews)</div>
            <div>15 Tasks Completed</div>
            <div>Payment Verified</div>
          </div>
        </section>
        <section className="gap-4 flex flex-col">
          <span>
            <p className="md:text-xl tracking-wide font-semibold text-lg leading-relaxed">
              Review History (Recent)
            </p>
            <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>
          </span>
          {/* Review contrainer! */}
          <div className="grid grid-cols-1 grid-rows-2 gap-4">
            <div className="flex-col flex p-2 rounded-lg bg-gray-700 gap-1">
              <span className="flex justify-between items-center px-2">
                <p className="text-sm font-medium text-blue-btn">
                  {task.creator}
                </p>
                <span className="flex gap-0.5">
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                </span>
              </span>
              <i className="line-clamp-2 text-sm text-gray-300">
                &ldquo;
                {"Great communication and clear requirements. Paid promptly!"}
                &ldquo;
              </i>
            </div>
            <div className="flex-col flex p-2 rounded-lg bg-gray-700 gap-1">
              <span className="flex justify-between items-center px-2">
                <p className="text-sm font-medium text-blue-btn">
                  {task.creator}
                </p>
                <span className="flex gap-0.5">
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                  <Star
                    size={12}
                    strokeWidth={2.5}
                    fill="yellow"
                    color="yellow"
                  />
                </span>
              </span>
              <i className="line-clamp-2 text-sm text-gray-300">
                &ldquo;
                {"Great communication and clear requirements. Paid promptly!"}
                &ldquo;
              </i>
            </div>
          </div>
        </section>
        {/* Action Section */}
        <section>
          <span>
            <p className="md:text-xl tracking-wide font-semibold text-lg leading-relaxed">
              Actions
            </p>
            <div className="min-w-full min-h-[1px] bg-gray-600 m-1"></div>
          </span>
          <div className="flex flex-col w-full gap-2 mt-4">
            <Button className="fle text-blue-100 flex-row rounded-md cursor-pointer bg-blue-500/30 hover:bg-blue-500/50  gap-1 items-center py-5 w-full">
              <Flag
                strokeWidth={2.5}
                size={12}
                fill="oklch(93.2% 0.032 255.585)"
                color="oklch(93.2% 0.032 255.585)"
              />{" "}
              <p className="font-medium">Report Task</p>
            </Button>
            <Button className="fle text-orange-100 flex-row rounded-md cursor-pointer bg-orange-500/30 hover:bg-orange-500/50  gap-1 items-center py-5 w-full">
              <Gavel color="oklch(95.4% 0.038 75.164)" className="size-5" />{" "}
              <p className="font-medium">Initiate Dispute</p>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default TaskDetails;
