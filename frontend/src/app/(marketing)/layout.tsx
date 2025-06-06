import AuthGuard from "@/config/AuthGuard";
import { ReactNode } from "react";

const unProctedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthGuard>
        {children}
      </AuthGuard>
    </>
  );
};
export default unProctedLayout;
