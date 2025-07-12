"use client";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import GreatingSec from "@/components/dashBoard/GreatingSec";
import DashProgressThree from "@/components/dashBoard/DashProgressThree";
import DashNotification from "@/components/dashBoard/DashNotification";
import DashTaskContain from "@/components/dashBoard/DashTaskContain";
import { toast } from "sonner";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserDataType } from "@/provider/provider";

const Dashboard = () => {
  const [data, setData] = useState<UserDataType>();
  console.log("i am re-rendring dashboard!");
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/", {
        withCredentials: true,
      });

      const user = response.data.data as UserDataType;

      setData(user); // ✅ updates your state with latest user data
      console.log("Fetched user:", user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUserData(); // ✅ run on mount
    toast("Data updated sucessfully!", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
      duration: 2000,
    });
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {/* <FetchUserDetails setName={setName} /> */}
      {/* Dashboard Top section */}
      <section className="sectionTop flex flex-col gap-10">
        {/* Greating section */}
        <GreatingSec name={data?.name} fetchUserData={fetchUserData} />
        {/* Progress bar with three grid element 1. active task 2. total balance 4. your rating */}
        <DashProgressThree data={data} />
        {/* Notifications */}
        <DashNotification />
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

                  <SelectContent className="bg-medium-dark text-white border border-light-dark ">
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
              <button className="btn-primary px-6 h-10 rounded-md">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        {/* Tasks Container */}
        <DashTaskContain />
      </section>
    </div>
  );
};
export default Dashboard;
