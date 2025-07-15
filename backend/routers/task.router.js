import { Router } from "express";
import { getAllTaskController } from "../controllers/Tasks/getAllTask.controller.js";
import { getSingleTaskController } from "../controllers/getSingleTask.controller.js";

const taskRouter = Router();

taskRouter.get("/", getAllTaskController);

taskRouter.get("/:id",getSingleTaskController);

export default taskRouter;