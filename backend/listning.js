import { parseAbiItem } from "viem";
import contractAbi from "./utils/abi.js";
import client from "./configs/client.js";
import { taskCreated } from "./events/taskCreated.event.js";
// Replace with your deployed contract address
// const contractAddress = '0xC5b86464c8704664bdcC43FD4CDe86DE2efB2A8C';
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Define the event ABI (same as emitted from Solidity)
const taskCreatedEvent = parseAbiItem(
  "event TaskCreated(uint256 indexed taskId,uint256 reward,string description)"
);

// Start listening for events
async function listenForEvents() {
  console.log("Listening for TaskCreated events on Sepolia...");

  client.watchEvent({
    address: contractAddress,
    event: taskCreatedEvent,
    onLogs: async (logs) => {
      for (const log of logs) {
        //   console.log('🔔 Task Created:', {
        //     taskId: log.args.taskId.toString(),
        //     description: log.args.description,
        //   }

        // );
        console.log("🔔 Task Created:", {
          taskId: log.args.taskId.toString(),
          reward: log.args.reward.toString(),
          description: log.args.description,
        });
        // await createTask(log.args.taskId);
        await taskCreated(log.args);
      }
    },
  });
}

const createTask = async (taskId) => {
  try {
    const data = await client.readContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "getTask",
      args: [taskId],
    });

    console.log("Task Data:", data);
  } catch (error) {
    console.error("Error fetching task data:", error);
    return;
  }
};

console.log(process.env.DB_URL);

export default listenForEvents;
