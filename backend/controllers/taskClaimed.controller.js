import Task from "../models/task.model.js";
import User from "../models/user.model.js";

export const taskClaimed = async (args) => {
  try {
    const { taskId, claimer } = args;

    const updateTasked = await Task.findOneAndUpdate(
      { id: Number(taskId) },
      { claimer: claimer, status: "InProgress" }
    );
    if (!updateTasked) {
      console.error(`Task with ID ${taskId} not found.`);
      throw new error(`Task with ID ${taskId} not found.`);
    }
    console.log(
      `Task with ID ${taskId} claimed by ${claimer}. Status updated to InProgress.`
    );
    await User.findOneAndUpdate(
      { wallet: String(claimer) },
      { $push: { claimed: updateTasked._id } }
    ).exec();
  } catch (error) {
    console.error("Error in taskClaimed:", error);
  }
};
