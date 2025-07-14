"use client";
import { UserDataType } from "@/provider/provider";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const UseUser = ():[UserDataType | undefined, () => Promise<void>] => {
  const [_data, setData] = useState<UserDataType>();
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/", {
        withCredentials: true,
      });
      if (!response) {
        throw new Error("Failed to fetch user data");
      }
      const user = response.data.data as UserDataType;

      setData(user as UserDataType); // ✅ updates your state with latest user data
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const data = useMemo(() => _data, [_data]); // ✅ memoizes the data to prevent unnecessary re-renders

  return [data, fetchUserData]; // ✅ returns data and fetchUserData function
};
export default UseUser;
