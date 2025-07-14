import { UserDataType } from "@/provider/provider";
import axios from "axios";
// import { toast } from "sonner";
import { create } from "zustand";

type storeType = {
  user: UserDataType | undefined;
  fetchUserData: () => void;
};

export const useTaskMangerStore = create<storeType>((set) => ({
  user: undefined,
  fetchUserData: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/", {
        withCredentials: true,
      });
      if (!response) {
        throw new Error("Failed to fetch user data");
      }
      const user = response.data.data as UserDataType;

      // toast("Data updated sucessfully!", {
      //   description: "Sunday, December 03, 2023 at 9:00 AM",
      //   action: {
      //     label: "Undo",
      //     onClick: () => console.log("Undo"),
      //   },
      //   duration: 2000,
      // });

      set({ user: user }); // ✅ updates your state with latest user data
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
}));
