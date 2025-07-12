import { UserDataType } from "@/provider/provider";
import { ClipboardList, Star, Wallet } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const DashProgressThree = ({ data }: { data: UserDataType}) => {
  
  const { rating, claimedCount, createdCount } = data;
  return (
    <section className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:gap-10 md:gap-6 gap-4">
      {/* Active Tasks Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <ClipboardList strokeWidth={2.5} color="#00A9E0" />{" "}
          <p>Completed Tasks</p>
        </div>
        {data ? (
          <p className="text-4xl font-bold">{claimedCount}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-rows-2 gap-0.5 h-full w-32">
            <Skeleton />
            <Skeleton />
          </div>
        )}
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          3 in progress, 2 pendig approval
        </div>
      </div>
      {/* Total Earning Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Wallet strokeWidth={2.5} color="#34d399" /> <p>Total Earnings</p>
        </div>
        {data ? (
          <div className="text-4xl font-bold">{createdCount} ETH</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-rows-2 gap-0.5 h-full w-32">
            <Skeleton />
            <Skeleton />
          </div>
        )}
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          Approximately $3,750 USD
        </div>
      </div>
      {/* User Rating Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Star strokeWidth={2.5} color="#fbbf24" /> <p>Your Rating</p>
        </div>
        {data ? (
          <div className="text-4xl font-bold flex gap-0.5 items-center">
            <span className="pr-2">
              <p>{rating}</p>
            </span>

            {[1, 2, 3, 4, 5].map((i) => {
              const isFull = rating >= i;
              const isHalf = rating >= i - 0.5 && rating < i;

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
        ) : (
          <div className="grid grid-cols-1 md:grid-rows-2 gap-0.5 h-full w-32">
            <Skeleton />
            <Skeleton />
          </div>
        )}
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          Based on 23 completed tasks
        </div>
      </div>
    </section>
  );
};
export default DashProgressThree;
