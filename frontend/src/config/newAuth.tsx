"use client";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";
const NewAuth = ({ children }: { children: ReactNode }) => {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
        router.push('/');
      
    }
  },[isConnected,router]);
  return <>{children}</>;
};
export default NewAuth;
