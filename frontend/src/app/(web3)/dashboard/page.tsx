"use client";

import { Input } from "@/components/ui/input";
import {
  CircleCheckBig,
  CirclePlus,
  ClipboardList,
  DollarSign,
  History,
  MessageSquare,
  Star,
  Wallet,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { TaskCard } from "@/components/dashBoard/TaskCard";
import { tasks } from "@/components/dashBoard/dummyData";
import  PaginationCompo  from "@/components/dashBoard/Pagination";

const Home = () => {
  const name = "Aditya";
  const _tasks = tasks.slice(0,4);
  return (
    <div className="flex flex-col gap-10">
      {/* Dashboard Top section */}
      <section className="sectionTop flex flex-col gap-10">
        {/* Greating section */}
        <section className=" font-outfit flex lg:flex-row flex-col gap-6 max-sm:mx-auto justify-between">
          <span className="my-auto items-center ">
            <span className="flex max-sm:justify-center text-3xl md:text-4xl tracking-tight sm:tracking-wide sm:leading-relaxed flex-wrap">
              <h2>Welcome Back,&nbsp;</h2>
              <p className="text-blue-btn">{name}!</p>
            </span>
            <span>
              <p className="text-gray-400 md:tracking-wide max-sm:text-sm">
                Ready to tackle some tasks and earn crypto?
              </p>
            </span>
          </span>

          {/* Button section into greating section */}

          <span className="my-auto max-sm:mx-auto  flex gap-4 md:gap-6 flex-col sm:flex-row">
            <button className="btn-primary flex flex-row gap-2">
              <CirclePlus size={17} />{" "}
              <p className="font-normal">Create Task</p>
            </button>
            <button className="btn-primary hover:bg-light-dark bg-medium-dark shadow-2xl flex flex-row gap-2">
              <History size={17} /> <p className="font-normal">Task History</p>
            </button>
          </span>
        </section>
        {/* Progress bar with three grid element 1. active task 2. total balance 4. your rating */}
        <section className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:gap-10 md:gap-6 gap-4">
          {/* Active Tasks Card */}
          <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
            <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
              <ClipboardList strokeWidth={2.5} color="#00A9E0" />{" "}
              <p>Active Tasks</p>
            </div>
            <div className="text-4xl font-bold">5</div>
            <div className="text-text-m-gray text- font-semibold tracking-wide">
              3 in progress, 2 pendig approval
            </div>
          </div>
          {/* Total Earning Card */}
          <div className="rounded-xl shadow px-6 py-6 flex flex-col gap-4 bg-medium-dark">
            <div className="text-xl font-bold flex items-center gap-2 tracking-wide">
              <Wallet strokeWidth={2.5} color="#34d399" /> <p>Total Earnings</p>
            </div>
            <div className="text-4xl font-bold">1.25 ETH</div>
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
        {/* Notifications */}
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
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Dashboard bottom section */}
      <section className="flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          {/* heading "Live task Feed - With Input" */}
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <span>
              <h2 className="text-3xl font-bold">Live Task Feed</h2>
            </span>
            <span className="max-md:w-full">
              <Input
                type="text"
                placeholder="Search by keywords"
                className="border-gray-500 rounded-md bg-medium-dark md:w-sm min-w-full"
              />
            </span>
          </div>
          {/* Filter Container */}
          <div className="flex flex-row items-center flex-wrap gap-4 justify-between">
            <div className="flex flex-row items-center lg:gap-12 gap-4 justify-start flex-wrap">
              {/* Filter Title */}
            <p>Filter by:</p>
            {/* Category filter */}
            <span>
              <Select>
                <SelectTrigger className="w-[180px] bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>

                <SelectContent className="bg-medium-dark text-white border border-light-dark">
                  <SelectGroup defaultValue={"all"}>
                    <SelectItem
                      value="all"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      All
                    </SelectItem>
                    <SelectItem
                      value="banana"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      Development
                    </SelectItem>
                    <SelectItem
                      value="blueberry"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      Design
                    </SelectItem>
                    <SelectItem
                      value="grapes"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      Marketing
                    </SelectItem>
                    <SelectItem
                      value="pineapple"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      Documentation
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
            {/* Reward Type filter */}
            <span>
              <Select>
                <SelectTrigger className="w-fit bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                  <SelectValue placeholder="Reward Type" />
                </SelectTrigger>

                <SelectContent className="bg-medium-dark text-white border border-light-dark">
                  <SelectGroup defaultValue={"all"}>
                    <SelectItem
                      value="all"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      All
                    </SelectItem>
                    <SelectItem
                      value="banana"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      ETH
                    </SelectItem>
                    <SelectItem
                      value="blueberry"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      USDT
                    </SelectItem>
                    <SelectItem
                      value="grapes"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      USDC
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
            {/* Status of tasks */}
            <span>
              <Select>
                <SelectTrigger className="w-[120px] bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent className="bg-medium-dark text-white border border-light-dark">
                  <SelectGroup defaultValue={"all"}>
                    <SelectItem
                      value="open"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      open
                    </SelectItem>
                    <SelectItem
                      value="pending"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      pending
                    </SelectItem>
                    <SelectItem
                      value="banana"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      verifing
                    </SelectItem>
                    <SelectItem
                      value="blueberry"
                      className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                    >
                      completed
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
            </div>
            <div className="flex items-center justify-end flex-row">
              <button className="btn-primary px-6 h-10 rounded-md">Apply Filters</button>
            </div>
          </div>
        </div>
        {/* Tasks Container */}
        <div className="flex flex-col gap-10">


        <div className="grid grid-rows-4 sm:grid-rows-2 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-12 xl:gap-4 ">
          {
            _tasks.map((task,index) =>{
              return <TaskCard key={index} {...task} />
            })
          }
        </div>
        <div>
          <PaginationCompo/>
        </div>
                </div>
      </section>
    </div>
  );
};
export default Home;
