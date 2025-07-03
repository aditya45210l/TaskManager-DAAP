import Task from "../models/task.model.js";

export const getAllTaskController = async (req, res, next) => {
  const {
    limit = 10,
    page = 1,
    status,
    claimer,
    creater,
    currency,
    category,
  } = req.query;
  console.log(limit, page, status, claimer, creater, currency, category);

  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      message: "All tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};
