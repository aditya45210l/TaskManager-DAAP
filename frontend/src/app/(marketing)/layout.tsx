'use client'
import Navbar from "@/components/landigPage/Navbar";
import AuthGuard from "@/config/AuthGuard";
import { ReactNode } from "react";

const unProctedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main >
        <AuthGuard>{children}</AuthGuard>
      </main>
    </>
  );
};
export default unProctedLayout;
