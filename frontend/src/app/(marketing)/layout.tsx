"use client";
import Navbar from "@/components/landigPage/Navbar";
import AuthGuard from "@/config/AuthGuard";
import { useAuth } from "@/provider/provider";
import { redirect } from "next/navigation";

import { ReactNode, useEffect } from "react";
import { useAccount } from "wagmi";

const Unprotected = ({ children }: { children: ReactNode }) => {
  const { isConnected } = useAccount();
  const {status} = useAuth();

  useEffect(() => {
    if (isConnected && status === "authenticated") {
      console.log("user is connected");
      redirect("/dashboard");
    }
  }, [isConnected, status]);

  return (
    <>
      <Navbar />
      <main>
        <AuthGuard>{children}</AuthGuard>
      </main>
    </>
  );
};
export default Unprotected;
