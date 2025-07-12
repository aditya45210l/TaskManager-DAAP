"use client";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const { isConnected, status } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  const isLandingPage = pathname === "/";

  const proctedRoutes = ["/dashboard", "/profile"];
  const isProtected = proctedRoutes.some((route) => pathname.startsWith(route));

  useEffect(() => {
    // setIsLoading(true);
    if (status === "connecting" || status === "reconnecting") return;

    if (!isConnected && isProtected) {
      router.replace("/");
      // setIsLoading(false);
    }

    if (isConnected && isLandingPage) {
      router.replace("/dashboard");
      // setIsLoading(false);
    }
    // setIsLoading(false);
  }, [isConnected, status, pathname, router, isLandingPage, isProtected]);

  // if(isLoading){
  //   return <div className=" h-20 w-20 text-5xl">Loading....</div>;
  // }

  return <>{children}</>;
};
export default AuthGuard;
