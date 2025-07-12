import { CircleCheckBig, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"

const DashNotification = () => {
  return (
        <section className="flex flex-col h-fit lg:px-8 lg:py-6 md:px-6 md:py-6 p-4 rounded-2xl bg-medium-dark gap-4">
          {/* Notifications heading */}
          <div className="flex justify-between">
            <p className="text-xl font-bold leading-relaxed">
              Recent Notifications
            </p>
            <span className="flex items-center">
              <Link
                href={"/"}
                className="text-sm text-blue-btn border-b border-b-transparent hover:border-blue-btn"
              >
                View All
              </Link>
            </span>
          </div>
          {/* notification container where notifications come in, its take max three notification */}
          <div className="flex-1 grid grid-rows-3 gap-3 w-full">
            {/* notificatioin 1*/}
            <div className="bg-darkest rounded-xl md:p-3 px-2 py-3 flex flex-row gap-2 ">
              <span className="flex items-center justify-center text-blue-btn">
                <CircleCheckBig strokeWidth={2.5} size={21} />
              </span>
              <div className="flex flex-col gap-0.5">
                <h1 className="tracking-wide font-semibold line-clamp-2">
                  Task &quot;Develop Smart Contract&quot; has been marked as
                  completed.
                </h1>
                <p className="text-xs text-text-m-gray font-semibold tracking-wide">
                  2 hours ago
                </p>
              </div>
            </div>
            {/* notification 2 */}
            <div className="bg-darkest rounded-xl md:p-3 px-2 py-3 flex flex-row gap-2 ">
              <span className="flex items-center justify-center ">
                <DollarSign color="#34d399" size={22} strokeWidth={2.5} />
              </span>
              <div className="flex flex-col gap-0.5">
                <h1 className="tracking-wide font-semibold line-clamp-2">
                  Payment of 0.2 ETH received for &quot;UI/UX Design&quot;.
                </h1>
                <p className="text-xs text-text-m-gray font-semibold tracking-wide">
                  1 day ago
                </p>
              </div>
            </div>
            {/* notification 3 */}
            <div className="bg-darkest rounded-xl md:p-3 px-2 py-3 flex flex-row gap-2 ">
              <span className="flex items-center justify-center">
                <MessageSquare color="orange" strokeWidth={2.5} size={21} />
              </span>
              <div className="flex flex-col gap-0.5">
                <h1 className="ms:tracking-wide sm:font-semibold line-clamp-2">
                  New messge from &quot;Alice&quot; regard &quot;NFT
                  Marketplace&quot;.
                </h1>
                <p className="text-xs text-text-m-gray font-semibold tracking-wide">
                  3 day ago
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
export default DashNotification