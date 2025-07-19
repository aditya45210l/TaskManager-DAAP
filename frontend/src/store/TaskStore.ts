import { TaskType } from "@/lib/constants/Types";
import axios from "axios";
import { create } from "zustand";

type TaskStoreType = {
  // rawTasks: TaskType[];
  filterTasks: TaskType[];
  // setRawTasks: (tasks: TaskType[]) => void;
  setFilterTasks: (task: TaskType[]) => void;
  fetchTasks: (input: fetchTasksInputeType) => void;
};

type fetchTasksInputeType = {
  limit?: number;
  page?: number;
  status?: "Created" | "InProgress" | "Verifying" | "Completed" | 'all';
  claimer?: string;
  creater?: string;
  currency?: string;
  category?: string;
  input?:string;

};

export const useTaskStore = create<TaskStoreType>((set) => ({
  // rawTasks: [],
  filterTasks: [],
  // setRawTasks: (tasks: TaskType[]) => set({ rawTasks: tasks }),
  setFilterTasks: (task: TaskType[]) => set({ filterTasks: task }),
  fetchTasks: async (filters: fetchTasksInputeType) => {
    // const { limit, category, claimer, creater, currency, page, status } = input;
      const query = new URLSearchParams();

      if (filters.status) query.append("status", filters.status);
  if (filters.claimer) query.append("claimer", filters.claimer);
  if (filters.creater) query.append("creater", filters.creater);
  if (filters.category) query.append("category", filters.category);
  if (filters.currency) query.append("currency", filters.currency);
  if (filters.page) query.append("page", filters.page.toString());
  if (filters.limit) query.append("limit", filters.limit.toString());
    try {
      console.log(query.get("status"));
      const res = await axios.get(
        `http://localhost:5000/api/v1/task/?${query.toString()}`
      );
      const tasksData = res.data.data;
      set({ filterTasks: tasksData });
      console.log("Fetched tasks:", tasksData);

    } catch (error) {
      console.log(error);
    }
  },
}));
