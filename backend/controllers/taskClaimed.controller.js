import Task from "../models/task.model.js";

export const taskClaimed = async (args) => {
  try {
    const { taskId, claimer } = args;

    const updateTasked = await Task.findOneAndUpdate(
      { id: Number(taskId) },
      { claimer: claimer, status: "InProgress" }
    );
    if (!updateTasked) {
      console.error(`Task with ID ${taskId} not found.`);
    }
    console.log(
      `Task with ID ${taskId} claimed by ${claimer}. Status updated to InProgress.`
    );
  } catch (error) {
    console.error("Error in taskClaimed:", error);
  }
};
