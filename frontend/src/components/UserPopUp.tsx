"use client";

import { useAuth } from "@/provider/provider";
import axios from "axios";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const UserPopUp = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();
  const {status} = useAuth();
  useEffect(() => {
    const checkUser = async () => {
      try {
        if (isConnected && status === "authenticated") {
          const { data } = await axios.get(
            "http://localhost:5000/api/v1/user/",
            {
              withCredentials: true,
            }
          );
          if (!data.isUser) {
            const resCreate = await fetch(
              "http://localhost:5000/api/v1/user/create"
            );
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
  });
  return <div>UserPopUp</div>;
};
export default UserPopUp;
