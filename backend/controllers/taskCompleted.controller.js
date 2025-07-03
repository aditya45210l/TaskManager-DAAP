import Task from "../models/task.model.js";

export const taskCompleted = async (args) => {
  try {
    const { taskId, completer } = args;
    // Update the task in the database
    const updatedTask = await Task.findOneAndUpdate(
      { id: Number(taskId) },
      { completer: completer, status: "Completed" }
    );
    // const UpdateUserData = await User.findOneAndUpdate({wallet:completer},{earning:})
    if (!updatedTask) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }
    console.log(`Task with ID ${taskId} marked as completed by ${completer}.`);
  } catch (error) {
    console.error("Error in taskCompleted:", error);
  }
};
