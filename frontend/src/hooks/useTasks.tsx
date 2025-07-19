import { getTasks } from "@/lib/api/Api";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const useTasks = () => {
  const { address, isConnected } = useAccount();

  return useQuery({
    queryKey: ["tasks", address],
    queryFn: () => getTasks(),
    enabled: isConnected,
    refetchInterval: 3000,
    staleTime: 2000,
  });
};
