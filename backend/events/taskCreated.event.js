import Task from "../models/task.model.js";
import client from '../configs/client.js'; 
import abi from "../utils/abi.js";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const taskCreated = async (args) => {
  const { taskId } = args;
  console.log("Task Created with ID:", taskId);

  const data = await client.readContract({
    address:contractAddress,
    abi: abi,
    functionName: "getTask",
    args: [taskId],
  })
  console.log("Task Data:", data);

//   // create new task document in DB
  await Task.create({
    id: Number(data.id),
    description: data.description,
    reward: data.reward.toString(),
    creator: data.creator,
    claimer: data.claimer,
    completer: data.completer,
  });
};
