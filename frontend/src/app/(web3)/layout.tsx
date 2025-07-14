"use client";
import Footer from "@/components/layout/Footer";
import GNavBar from "@/components/layout/GNavBar";
import { useAuth } from "@/provider/provider";
import { useTaskMangerStore } from "@/store/AuthUserStore";
import { redirect } from "next/navigation";

import { ReactNode, useEffect } from "react";
import { Toaster } from "sonner";
import { useAccount } from "wagmi";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { isConnected } = useAccount();
  const {status} = useAuth();
  const {fetchUserData} = useTaskMangerStore((state) =>state);
  useEffect(() => {
    if (isConnected && status === "unauthenticated") {
      console.log("user is connected");
      fetchUserData();
      redirect("/");
    }
    if (!isConnected && status === "authenticated") {
      redirect("/");
    }
  }, [isConnected, status]);

  return (
    <>
      <header className="min-h-[72px]">
        <GNavBar />

      </header>
      <main className="container text-white px-4 md:px-6 my-6 md:my-8 mx-auto" >
                 <Toaster className=""/>
        {children}
      </main>
      <Footer />
    </>
  );
};
export default ProtectedLayout;
