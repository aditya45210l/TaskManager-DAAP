import { UserDataType } from "@/provider/provider";
import { ClipboardList, Star, Wallet } from "lucide-react";

const DashProgressThree = ({ data }: { data?: UserDataType }) => {
  return (
    <section className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:gap-10 md:gap-6 gap-4">
      {/* Active Tasks Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <ClipboardList strokeWidth={2.5} color="#00A9E0" />{" "}
          <p>Completed Tasks</p>
        </div>
        <div className="text-4xl font-bold">{data ? data.rating : 0}</div>
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          3 in progress, 2 pendig approval
        </div>
      </div>
      {/* Total Earning Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Wallet strokeWidth={2.5} color="#34d399" /> <p>Total Earnings</p>
        </div>
        <div className="text-4xl font-bold">{data ? data.earning : 0} ETH</div>
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          Approximately $3,750 USD
        </div>
      </div>
      {/* User Rating Card */}
      <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
        <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
          <Star strokeWidth={2.5} color="#fbbf24" /> <p>Your Rating</p>
        </div>
        <div className="text-4xl font-bold flex gap-0.5 items-center">
          <span className="pr-2">
            <p>3.5</p>
          </span>
          <Star strokeWidth={2} size={21} color="#fbbf24" fill="#fbbf24" />
          <Star strokeWidth={2} size={21} color="#fbbf24" fill="#fbbf24" />
          <Star strokeWidth={2} size={21} color="#fbbf24" fill="#fbbf24" />
          <Star strokeWidth={2} size={21} color="#fbbf24" />
          <Star strokeWidth={2} size={21} color="#fbbf24" />
        </div>
        <div className="text-text-m-gray text- font-semibold tracking-wide">
          Based on 23 completed tasks
        </div>
      </div>
    </section>
  );
};
export default DashProgressThree;
