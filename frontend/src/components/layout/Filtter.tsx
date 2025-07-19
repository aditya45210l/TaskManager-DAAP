"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useTaskStore } from "@/store/TaskStore";
import { useEffect } from "react";

const formSchema = z.object({
  category: z.string().min(1, "Select a category"),
  reward: z.string().min(1, "Select a reward type"),
  status: z
    .enum(["Created", "InProgress", "Verifying", "Completed",'all'])
    .optional(),
  input: z.string().optional(),
});

export default function Filtter() {
  const fetchTask = useTaskStore((state) => state.fetchTasks);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "all",
      reward: "all",
      status: "Created",
      input: "",
    },
  });
  console.log("------Filtter component rendered----");

  const onSubmit = (fillters: z.infer<typeof formSchema>) => {
    console.log("Filters applied:", fillters);
    fetchTask(fillters);
  };

  //   const watchFields = form.watch();

    useEffect(() => {
          fetchTask({});
    }, []);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <span>
              <h2 className="text-3xl font-bold">Live Task Feed</h2>
            </span>
            <FormField
              control={form.control}
              name="input"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <span className="max-md:w-full">
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        type="text"
                        placeholder="Search by keywords"
                        className="border-gray-500 rounded-md bg-medium-dark md:w-sm min-w-full"
                      />
                    </span>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-4 justify-between">
            <div className="flex flex-row items-center lg:gap-12 gap-4 justify-start flex-wrap">
              <p>Filter by:</p>

              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px] bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-medium-dark text-white border border-light-dark">
                          <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="development">
                              Development
                            </SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="documentation">
                              Documentation
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reward Type */}
              <FormField
                control={form.control}
                name="reward"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">
                      Reward Type
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[140px] bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                          <SelectValue placeholder="Reward Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-medium-dark text-white border border-light-dark">
                          <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="eth">ETH</SelectItem>
                            <SelectItem value="usdt">USDT</SelectItem>
                            <SelectItem value="usdc">USDC</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[120px] bg-medium-dark text-white border border-light-dark hover:bg-light-dark">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-medium-dark text-white border border-light-dark">
                          <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="Created">Open</SelectItem>
                            <SelectItem value="InProgress">Pending</SelectItem>
                            <SelectItem value="Verifying">Verifying</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-end flex-row">
              <Button
                type="submit"
                className="btn-primary px-6 h-10 rounded-md"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </form>
      </Form>

    </>
  );
}
