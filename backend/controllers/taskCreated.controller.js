import Task from "../models/task.model.js";
import client from "../configs/client.js";
import abi from "../utils/abi.js";
import { CONTRACT_ADDRESS } from "../configs/env.js";
import { decodeEventLog } from "viem";

export const handleTaskCreated = async (next) => {
  try {
    console.log("checking for tasks in the blockchain...");

    const listOfTasksInBlockchain = await fetchTasksIds();
    const listOfTasksInDB = await Task.find({}, "id");

    console.log("Tasks save in DB:", listOfTasksInDB);
    console.log("Tasks save in Blockchain:", listOfTasksInBlockchain);

    if (listOfTasksInBlockchain.length === 0) {
      console.log("No tasks found in the blockchain.");
      return;
    } else if (listOfTasksInBlockchain.length !== listOfTasksInDB.length) {
      console.log("Tasks in blockchain and database are not sync.");

      for (const taskId of listOfTasksInBlockchain) {
        if (!listOfTasksInDB.some((task) => task.id === taskId)) {
          console.log(`Task with ID ${taskId} not found in the database.`);
          await createTask({ taskId });
        } else {
          console.log(`Task with ID ${taskId} already exists in the database.`);
        }
      }
    }

    console.log(
      "All tasks are in sync between the blockchain and the database."
    );
  } catch (error) {
    console.error("Error in handleTaskCreated:", error);
    next();
  }
};

export const createTask = async (args) => {
  try {
    const { taskId } = args;

    const data = await client.readContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "getTask",
      args: [taskId],
    });
    console.log("data: ",data);

    // create new task document in DB
    await Task.create({
      id: Number(data.id),
      title: data.title,
      description: data.description,
      reward: data.reward.toString(),
      creator: data.creator,
      claimer: data.claimer,
      completer: data.completer,
    });
    console.log(`Task with ID ${taskId} created successfully in the database.`);
  } catch (error) {
    console.error("Error in taskCreated:", error);
  }
};

const fetchTasksIds = async () => {
  try {
    console.log("Fetching tasks from the blockchain...");
    const tasks = await client.getLogs({
      address: CONTRACT_ADDRESS,
      abi: abi,
      eventName: "TaskCreated",
      fromBlock: BigInt(0), // Adjust as necessary
      toBlock: "latest",
    });
    if (!tasks) {
      console.log("No tasks found.");
      return;
    }
    const tasksIds = [];
    tasks.forEach((task) => {
      // const taskId = task.args.taskId.toString();
      // taskCreated({ taskId });
      // console.log(`Task with ID ${taskId} fetched and created.`);
      // console.log(task);
      const decodedTask = decodeEventLog({
        abi: abi,
        eventName: "TaskCreated",
        data: task.data,
        topics: task.topics,
      });
      // console.log("Decoded Task: ", decodedTask.args.taskId);
      tasksIds.push(Number(decodedTask.args.taskId));
    });
    return tasksIds;
  } catch (error) {
    console.error("Error in fetchTasks:", error);
  }
};
