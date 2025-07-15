import { TaskType } from "@/lib/constants/Types";
import axios from "axios";

import { create } from "zustand";

type TaskStoreType = {
  rawTasks: TaskType[];
  filterTasks: TaskType[];
  setRawTasks: (tasks: TaskType[]) => void;
  setFilterTasks: (task: TaskType[]) => void;
  fetchTasks: (input: fetchTasksInputeType) => void;
};

type fetchTasksInputeType = {

    limit?: number;
    page?: number;
    status?: "Created" | "InProgress" | "Verifying" | "Completed";
    claimer?: string;
    creater?: string;
    currency?: string;
    category?: string;

};

export const useTaskStore = create<TaskStoreType>((set) => ({
  rawTasks: [],
  filterTasks: [],
  setRawTasks: (tasks: TaskType[]) => set({ rawTasks: tasks }),
  setFilterTasks: (task: TaskType[]) => set({ filterTasks: task }),
  fetchTasks: async (input: fetchTasksInputeType) => {
    // const { limit, category, claimer, creater, currency, page, status } = input;
    try {
      const param = new URLSearchParams();
      param.append("status", String(input.status));
      console.log(param.get("status"));
      const res = await axios.get(`http://localhost:5000/api/v1/task/?${param.toString()}`);
      const tasksData = res.data;
      console.log("Fetched tasks:", tasksData);
      console.log(input);
    } catch (error) {
      console.log(error);
    }
  },
}));
