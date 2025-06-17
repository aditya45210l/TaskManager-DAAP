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
import { ChevronDownIcon, CircleAlert } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      reward: "",
      date: undefined,
      terms: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
        <div className="grid grid-cols-2 gap-12">
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
                  <SelectTrigger className="input-form py-6">
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
                type="number"
                {...register("reward", {
                  required: "Reward is required",
                  min: { value: 0.01, message: "Min value is 0.01 ETH" },
                })}
                className="input-form pr-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                placeholder="e.g. 0.5"
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
          <Label htmlFor="date" className="px-1">Deadline</Label>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Deadline is required" }}
            render={({ field }) => (
              <Popover open={!!field.value} onOpenChange={(v) => !v && field.onChange(undefined)}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="input-form flex justify-between items-center">
                    {field.value ? new Date(field.value).toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
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
        <div className="flex items-center py-2">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: "You must accept the terms" })}
            className="form-checkbox text-[#67E8F9] bg-[#334155] border-[#64748B] rounded focus:ring-[#67E8F9]"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-[#94A3B8] cursor-pointer select-none">
            I understand that creating this task will incur a small gas fee and will be recorded on the blockchain.
          </label>
        </div>
        {errors.terms && (
          <span className="text-red-600 flex text-sm gap-1 items-center px-1">
            <CircleAlert size={14} />
            <p>{errors.terms.message}</p>
          </span>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button type="reset" className="rounded-md text-blue-btn border-2 border-blue-btn bg-transparent px-8 py-2 hover:bg-medium-dark/80 text-base font-semibold">
            Reset Form
          </button>
          <button type="submit" className="rounded-md bg-blue-btn px-8 py-2 text-[#0F172A] text-base font-semibold shadow-lg hover:bg-blue-btn/80">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;







// ============================================================================


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
import { ChevronDownIcon, CircleAlert } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState<Date | undefined>(undefined);

  // const [selected, setSelected] = useState<Date | undefined>();
  // const [open, setOpen] = useState(false);

  // Only allow future dates
  // const today = new Date();
  console.log(date);
  return (
    <div className=" flex flex-col gap-4 mx-auto bg-medium-dark px-6 md:px-8 py-6 rounded-xl shadow-2xl lg:max-w-4xl md:max-w-3xl">
      <section className="border-b border-b-light-dark pb-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide">
          Create New Task
        </h1>
      </section>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm  font-semibold">
            Task Title
          </label>
          <input
            id="title"
            {...register("title", {
              required: "title is require",
              minLength: { value: 3, message: "Min length must >3" },
            })}
            className="input-form"
            placeholder="e.g., Design a new dApp logo"
            type="text"
          />
          {errors.title && (
            <span className=" text-red-600 flex text-sm flex-row gap-1 items-center">
              <span className="">
                <CircleAlert size={14} />
              </span>
              <p> {errors.title.message?.toString()}</p>
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm  font-semibold">
            Task Description
          </label>
          <textarea
            {...register("description", {
              required: "title is require",
              minLength: { value: 20, message: "Min length must >20" },
            })}
            className="textArea-form"
            placeholder="Provide a detailed description of the task requirements, deliverables, and any relevant context. Be specific!"
            id="description"
          ></textarea>
          {errors.description && (
            <span className=" text-red-600 flex text-sm flex-row gap-1 items-center">
              <span className="">
                <CircleAlert size={14} />
              </span>
              <p> {errors.description.message?.toString()}</p>
            </span>
          )}
        </div>
        {/* Category and Reward amount container */}
        <div className="grid grid-cols-2 grid-rows-1 gap-12">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm  font-semibold">
              Category
            </label>
            <Select>
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
                <SelectItem
                  value="apple"
                  className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                >
                  Apple
                </SelectItem>
                <SelectItem
                  value="banana"
                  className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                >
                  Banana
                </SelectItem>
                <SelectItem
                  value="grape"
                  className="hover:bg-light-dark focus:bg-light-dark focus:text-white focus:cursor-pointer aria-selected:bg-light-dark"
                >
                  Grape
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.Category && (
              <span className=" text-red-600 flex text-sm flex-row gap-1 items-center">
                <span className="">
                  <CircleAlert size={14} />
                </span>
                <p> {errors.Category.message?.toString()}</p>
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm  font-semibold">
              Reward (ETH)
            </label>
            <div className="relative">
              <input
                className="input-form [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                id="task-title"
                placeholder="e.g., Design a new dApp logo"
                required={true}
                type="number"
              />
              <span className="absolute right-3 top-1/2 p-3 -translate-y-1/2 text-[#00a9e0] font-medium pointer-events-none">
                ETH
              </span>
            </div>
          </div>
        </div>
        {/* Calender  dont't touch */}

        <div className="flex flex-col gap-3 min-w-full">
          <Label htmlFor="date" className="px-1">
            Deadline
          </Label>
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
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center py-2 ">
          <input
            type="checkbox"
            className="form-checkbox text-[#67E8F9] bg-[#334155] border-[#64748B] rounded focus:ring-[#67E8F9] focus:ring-offset-[#1E293B]"
            id="terms"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-sm text-[#94A3B8] cursor-pointer  select-none"
          >
            I understand that creating this task will incur a small gas fee and
            will be recorded on the blockchain.
          </label>
        </div>
        <div className="flex justify-end gap-4">
          <button className=" rounded-md  text-blue-btn  border-2 border-blue-btn bg-transparent px-8 py-2  cursor-pointer  hover:bg-medium-dark/80 active:bg-medium-dark/60 text-base font-semibold leading-normal tracking-wide shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] focus:ring-blue-btn">
            Resert Form
          </button>
          <button
            type="submit"
            className=" rounded-md  bg-blue-btn  px-8 t py-2 cursor-pointer hover:bg-blue-btn/80 active:bg-blue-btn/60 text-[#0F172A] text-base font-semibold leading-normal tracking-wide shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E293B] focus:ring-blue-btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
export default Page;

