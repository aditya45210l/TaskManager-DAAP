"use client";
import Footer from "@/components/layout/Footer";
import GNavBar from "@/components/layout/GNavBar";
import AuthGuard from "@/config/AuthGuard";
import { ReactNode } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthGuard>
      <GNavBar />
      <main className="container text-white px-4 md:px-6 my-6 md:my-12 mx-auto">{children}</main>
      <Footer/>
    </AuthGuard>
  );
};
export default ProtectedLayout;
