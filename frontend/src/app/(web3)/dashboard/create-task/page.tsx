"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contract, erc20Abi } from "../../../../lib/constants/constants";
import { ChevronDownIcon, CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";

import { useConfig } from "wagmi";
import { parseEther } from "viem";
import { redirect } from "next/navigation";
import { toast } from "sonner";

type I_formSubmit = {
  title: string;
  description: string;
  category: string;
  date: string;
  reward: string;
  terms: boolean;
};
const Page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<I_formSubmit>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      reward: "",
      date: undefined,
      terms: false,
    },
  });

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { writeContractAsync, isPaused, isPending } = useWriteContract();
  const config = useConfig();

  const onSubmit: SubmitHandler<I_formSubmit> = async (data) => {
    const { description, reward, title } = data;

    const createTaskHash = await writeContractAsync({
      abi: erc20Abi,
      address: contract as `0x${string}`,
      functionName: "createTask",
      value: parseEther(reward),
      args: [title, description, parseEther(reward)],
    });
    const taskRecipts = waitForTransactionReceipt(config, {
      confirmations: 3,
      hash: createTaskHash,
    });
    console.log((await taskRecipts).status);
    console.log("hash:", createTaskHash);
    console.log("CreateTask recipts:", taskRecipts);
    if ((await taskRecipts).status) {
      toast("Task Created successfully!", {
        description: Date.now(),
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
        duration: 3000,
      });
      setTimeout(() =>{
        redirect("/dashboard");
      },2000);
    }
  };

  return (
    <div className="flex flex-col gap-4 mx-auto bg-medium-dark px-6 md:px-8 py-6 rounded-xl shadow-2xl lg:max-w-4xl md:max-w-3xl">
      <section className="border-b border-b-light-dark pb-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide">
          Create New Task
        </h1>
      </section>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-semibold">
            Task Title
          </label>
          <input
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: { value: 3, message: "Min length must > 3" },
            })}
            className="input-form"
            placeholder="e.g., Design a new dApp logo"
            type="text"
          />
          {errors.title && (
            <span className="text-red-600 flex text-sm gap-1 items-center">
              <CircleAlert size={14} />
              <p>{errors.title.message}</p>
            </span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="description" className="text-sm font-semibold">
            Task Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 20, message: "Min length must > 20" },
            })}
            className="textArea-form"
            placeholder="Describe task requirements, deliverables, context..."
            id="description"
          />
          {errors.description && (
            <span className="text-red-600 flex text-sm gap-1 items-center">
              <CircleAlert size={14} />
              <p>{errors.description.message}</p>
            </span>
          )}
        </div>

        {/* Category and Reward */}
        <div className="grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 grid-cols-1 sm:gap-12 gap-4">
          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="text-sm font-semibold">
              Category
            </label>
            <Controller
              control={control}
              name="category"
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className=" felx w-full  resize-none overflow-hidden 
          rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#67E8F9] 
          border-2 border-[#334155] bg-[#0F172A] placeholder:text-[#64748B] 
          px-3 text-base font-normal leading-normal transition-all 
          duration-150 ease-in-out focus:border-[#67E8F9] focus:shadow-md 
          focus:shadow-[#67E8F9]/30 py-6"
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0F172A] border-[#334155] text-[#E2E8F0]">
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <span className="text-red-600 flex text-sm gap-1 items-center">
                <CircleAlert size={14} />
                <p>{errors.category.message}</p>
              </span>
            )}
          </div>

          {/* Reward */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="reward" className="text-sm font-semibold">
              Reward (ETH)
            </label>
            <div className="relative">
              <input
                id="reward"
                step={0.0001}
                type="number"
                {...register("reward", {
                  required: "Reward is required",
                  min: { value: 0.0001, message: "Min value is 0.0001 ETH" },
                })}
                className="input-form pr-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                placeholder="e.g. 0.005"
              />
              <span className="absolute right-3 top-1/2 p-3 -translate-y-1/2 text-[#00a9e0] font-medium pointer-events-none">
                ETH
              </span>
            </div>
            {errors.reward && (
              <span className="text-red-600 flex text-sm gap-1 items-center">
                <CircleAlert size={14} />
                <p>{errors.reward.message}</p>
              </span>
            )}
          </div>
        </div>

        {/* Deadline Calendar */}
        <div className="flex flex-col gap-3 min-w-full">
          <Label htmlFor="date" className="px-1">
            Deadline
          </Label>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Deadline is required" }}
            render={({ field }) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className=" appearance-none min-w-0 resize-none overflow-hidden 
              rounded-lg text-[#E2E8F0] focus:outline-none focus:ring-2 
              focus:ring-[#67E8F9] border-2 border-[#334155] bg-[#0F172A] 
              h-12 placeholder:text-[#64748B] p-3 p text-base font-normal 
              leading-normal transition-all duration-150 ease-in-out 
              focus:border-[#67E8F9] focus:shadow-md focus:shadow-[#67E8F9]/30 
              flex justify-between items-center hover:bg-gray-900"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    required
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      field.onChange(String(date));
                      setDate(date);
                      setOpen(false);
                    }}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          {errors.date && (
            <span className="text-red-600 flex text-sm gap-1 items-center">
              <CircleAlert size={14} />
              <p>{errors.date.message}</p>
            </span>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="flex flex-col">
          <div className="flex items-center py-2">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: "You must accept the terms" })}
              className="form-checkbox text-[#67E8F9] bg-[#334155] border-[#64748B] rounded focus:ring-[#67E8F9]"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-[#94A3B8] cursor-pointer select-none"
            >
              I understand that creating this task will incur a small gas fee
              and will be recorded on the blockchain.
            </label>
          </div>
          {errors.terms && (
            <span className="text-red-600 flex text-sm gap-1 items-center px-1">
              <CircleAlert size={14} />
              <p>{errors.terms.message}</p>
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 sm:flex-row flex-col">
          <button
            type="reset"
            className="rounded-md text-blue-btn border-2 border-blue-btn bg-transparent px-8 py-2 hover:border-blue-btn/70 active:border-blue-btn/50 active:ring-2 text-base font-semibold cursor-pointer"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-btn px-8 py-2 text-[#ffffff] text-base font-semibold shadow-lg hover:bg-blue-btn/80 cursor-pointer "
          >
            {isPending ? "pending..." : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
