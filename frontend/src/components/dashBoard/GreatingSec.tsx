"use client";
import { CirclePlus, History, SquarePen } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { UserNameModel } from "./actions/UserNameModel";
import { useState } from "react";

const GreatingSec = ({
  name,
  fetchUserData,
}: {
  name: string | undefined;

  fetchUserData: () => void;
}) => {
  const [popUpModel, setPopUpModel] = useState<boolean>(false);
  console.log(name);
  
  return (
    <section className=" font-outfit flex lg:flex-row flex-col gap-6 max-sm:mx-auto justify-between">
      <span className="my-auto items-center ">
        <span className="flex max-sm:justify-center text-3xl md:text-4xl tracking-tight sm:tracking-wide sm:leading-relaxed flex-wrap">
          <h2>Welcome Back,&nbsp;</h2>
          {name ? (
            <div className="flex flex-row gap-1.5 justify-center items-center">
              <p className="text-blue-btn">{name} </p>
              <button onClick={() => setPopUpModel(true)}>
                <SquarePen
                  strokeWidth={2}
                  className="hover:text-blue-btn cursor-pointer text-gray-500"
                  size={19}
                />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-rows-2 gap-1 w-32 max-sm:h-9">
              <Skeleton />
              <Skeleton />
            </div>
          )}
        </span>
        <span>
          <p className="text-gray-400 md:tracking-wide max-sm:text-sm">
            Ready to tackle some tasks and earn crypto?
          </p>
        </span>
      </span>

      {/* Button section into greating section */}

      <span className="my-auto max-sm:mx-auto  flex gap-4 md:gap-6 flex-col sm:flex-row">
        <Link
          href={"/dashboard/create-task"}
          className="btn-primary flex flex-row gap-2"
        >
          <CirclePlus size={17} /> <p className="font-normal">Create Task</p>
        </Link>
        <button className="btn-primary hover:bg-light-dark bg-medium-dark shadow-2xl flex flex-row gap-2">
          <History size={17} /> <p className="font-normal">Task History</p>
        </button>
      </span>
      {popUpModel ? (
        <UserNameModel
          popUpModel={popUpModel}
          setPopUpModel={setPopUpModel}
          fetchUserData={fetchUserData}
        />
      ) : null}
    </section>
  );
};
export default GreatingSec;
