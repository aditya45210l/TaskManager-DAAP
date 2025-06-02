import Task from "../models/task.model.js";

export const taskSubmit = async (args) => {
  try {
    const { taskId } = args;
    const taskUpdate = await Task.findOneAndUpdate(
      { id: Number(taskId) },
      { status: "Verifying" }
    );
    if (!taskUpdate) {
      console.error(`Task with ID ${taskId} not found.`);
    }
    console.log(`Task is now submitted for verification: ${taskId}`);
  } catch (error) {
    console.error("Error in taskSubmit:", error);
  }
};
