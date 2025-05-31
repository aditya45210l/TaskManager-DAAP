import { createPublicClient } from "viem";
import { http } from "viem";
import { anvil } from "viem/chains";

export default createPublicClient({
  chain: anvil,
  transport: http("http://localhost:8545"),
});