"use client";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isConnected, status } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  const isLandingPage = pathname === "/";

  const proctedRoutes = ["/dashboard", "/profile"];
  const isProtected = proctedRoutes.some((route) => pathname.startsWith(route));

  useEffect(() => {
    if (status === "connecting" || status === "reconnecting") return;

    if (!isConnected && isProtected) {
      router.replace("/");
    }

    if (isConnected && isLandingPage) {
      router.replace("/dashboard");
    }
  }, [isConnected, status, pathname, router,isLandingPage,isProtected]);

  return <>{children}</>;
};
export default AuthGuard;
