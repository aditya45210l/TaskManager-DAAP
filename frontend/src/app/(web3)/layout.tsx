'use client'
import AuthGuard from "@/config/AuthGuard";
import { ReactNode } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthGuard>{children}</AuthGuard>
    </>
  );
};
export default ProtectedLayout;
