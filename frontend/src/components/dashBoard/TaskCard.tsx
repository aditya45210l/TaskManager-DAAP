import { Badge } from "@/components/ui/badge";
import {  ArrowRightToLine, CalendarFold, DollarSign, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface TaskCardProps {
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

const statusClasses = {
  Open: "bg-sky-700 text-sky-100",
  Progress: "bg-yellow-600 text-yellow-100",
  Verifying: "bg-indigo-600 text-indigo-100",
  Completed: "bg-emerald-700 text-emerald-100",
};

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  status,
  creator,
  reward,
  currency,
  usdEquivalent,
  tags,
  rating,
  dueDate,
}) => {
  return (
    <div className="bg-[#1F2937] rounded-xl shadow-lg shadow-[#00A9E0]/10 overflow-hidden hover:shadow-2xl hover:shadow-[#00A9E0]/30 transition-all duration-300 flex flex-col cursor-pointer">
      <div className="flex flex-1 flex-col px-4 py-6 gap-6">
        {/* Heading & status container */}
        <div className="flex flex-row">
          <h2 className="flex-1 text-lg leading-tight line-clamp-2">{title}</h2>
          <span className="w-fit items-start">
            <Badge className={`${statusClasses[status]}`}>{status}</Badge>
          </span>
        </div>
        {/* Reward and Task end date */}
        <div className="flex justify-between items-center text-gray-400 flex-wrap gap-1">
          <span className="flex flex-row items-center gap-0.5 ">
            <DollarSign color="#34d399" size={18} strokeWidth={2} />
            <p>
              {reward}
              {currency !== "ETH" ? ".00" : null} {currency}{" "}
            </p>
            {currency === "ETH" ? (
              <p className="text-xs  ">{`(~$${usdEquivalent} USD)`}</p>
            ) : null}
          </span>
          <span className="flex flex-row items-center gap-1">
            <CalendarFold color="orange" size={18} strokeWidth={2} />{" "}
            <p>Due: {dueDate}</p>
          </span>
        </div>
        {/* Descripiton sections */}
        <div>
          <p className="text-gray-400 line-clamp-3">{description}</p>
        </div>
        {/* Tags section */}
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag) => {
            return (
              <Badge key={tag} className="bg-light-dark text-gray-300 text-xs">
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gray-900 border-t border-t-gray-400 px-4 py-6 flex flex-row justify-between ">
        <div className="flex flex-row gap-2">
          <span className="flex justify-center items-center">
            <Image
              className="rounded-full border-2 border-blue-btn"
              alt="Sample Image"
              height={44}
              width={44}
              src={"/landing/nft.png"}
            />
          </span>
          <div className="flex flex-col gap-0.5 justify-center">

          <span>
            <span className="font-semibold leading-relaxed">{creator}</span>
          </span>
          <span className=" flex gap-[1px] items-center justify-center">
            <StarIcon size={15} color="#fbbf24" fill={Math.floor(rating) >= 1 ? "#fbbf24":''} strokeWidth={2} />
            <StarIcon size={15} color="#fbbf24" fill={Math.floor(rating) >= 2 ? "#fbbf24":''} strokeWidth={2} />
            <StarIcon size={15} color="#fbbf24" fill={Math.floor(rating) >= 3 ? "#fbbf24":''} strokeWidth={2} />
            <StarIcon size={15} color="#fbbf24" fill={Math.floor(rating) >= 4 ? "#fbbf24":''} strokeWidth={2} />
            <StarIcon size={15} color="#fbbf24" fill={Math.floor(rating) >= 5 ? "#fbbf24":''} strokeWidth={2} />
              <p className="text-xs text-gray-400"> ({rating})</p>
          </span>
          </div>
        </div>
        <span className="flex items-center">
          <Link className="md:px-4 py-1  rounded-md border-2 border-sky-600 transition-all cursor-pointer hover:text-gray-400 hover:shadow-[#00A9E0]/30 hover:border-sky-700  active:bg-sky-950 text-sm" href={"./tasks/task-details"}><ArrowRightToLine strokeWidth={2}  /></Link>
        </span>
      </div>
    </div>
  );
};
