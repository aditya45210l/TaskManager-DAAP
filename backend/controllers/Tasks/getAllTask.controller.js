import Task from "../../models/task.model.js";
import { fillterQuery } from "./buildFilter.js";
import { validateQuery } from "./validateQuery.js";

export const getAllTaskController = async (req, res, next) => {
  // Validate query parameters
  const query = validateQuery(req.query);
  const filter  = fillterQuery(query)
  const skip = (query.page - 1) * query.limit;
  try {
    const tasks = await Task.find(filter).skip(skip).limit(Number(query.limit));

    res.status(200).json({
      status: "success",
      message: "All tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};
