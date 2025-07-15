"use client";
import { ClipboardList, Star, Wallet } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useTaskMangerStore } from "@/store/AuthUserStore";
import { formatEther, parseEther } from "viem";

const UserDetailsCard = ({
  type,
}: {
  type: "completed" | "rating" | "earning";
}) => {
  const data = useTaskMangerStore((state) => state.user);
  const { rating, claimedCount, earning } = data ? data : {};
  const convertedEth = formatEther(earning ? BigInt(earning) : parseEther("0"));
  console.log(data);
  return (
    <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark justify-between">
      {type === "completed" ? (
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <ClipboardList strokeWidth={2.5} color="#00A9E0" />{" "}
          <p>Completed Tasks</p>
        </div>
      ) : type === "earning" ? (
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Wallet strokeWidth={2.5} color="#34d399" /> <p>Total Earnings</p>
        </div>
      ) : type === "rating" ? (
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Star strokeWidth={2.5} color="#fbbf24" /> <p>Your Rating</p>
        </div>
      ) : null}
      {data ? (
        type === "completed" ? (
          <p className="text-4xl font-bold">{claimedCount}</p>
        ) : type === "earning" ? (
          <p className="text-4xl font-bold">
            {Number(convertedEth).toFixed(2)} ETH
          </p>
        ) : type === "rating" ? (
          <div className="text-4xl font-bold flex gap-0.5 items-center">
            <span className="pr-2">
              <p>{rating}</p>
            </span>

            {[1, 2, 3, 4, 5].map((i) => {
              const isFull = data.rating >= i;
              const isHalf = data.rating >= i - 0.5 && data.rating < i;

              return (
                <Star
                  key={i}
                  strokeWidth={2}
                  size={21}
                  color="#fbbf24"
                  fill={isFull || isHalf ? "#fbbf24" : "none"}
                  style={{
                    maskImage:
                      isHalf && !isFull
                        ? "linear-gradient(to right, black 50%, transparent 50%)"
                        : undefined,
                    WebkitMaskImage:
                      isHalf && !isFull
                        ? "linear-gradient(to right, black 50%, transparent 50%)"
                        : undefined,
                  }}
                />
              );
            })}
          </div>
        ) : null
      ) : (
        <div className="grid grid-cols-1 md:grid-rows-2 gap-0.5 h-10 w-32">
          <Skeleton />
          <Skeleton />
        </div>
      )}
      <div className="text-text-m-gray text- font-semibold tracking-wide">
        {type === "completed"
          ? "3 in progress, 2 approval"
          : type === "earning"
          ? "Approximately $3,750 USD"
          : "Based on 23 completed tasks."}
      </div>
    </div>
  );
};
export default UserDetailsCard;
