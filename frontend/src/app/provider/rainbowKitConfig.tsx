"user client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, sepolia, polygon } from "viem/chains";

export default getDefaultConfig({
  appName: "Task Manager",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [anvil, zksync, sepolia, polygon],
  ssr: true,
  
});
