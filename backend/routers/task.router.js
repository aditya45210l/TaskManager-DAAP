import { Router } from "express";
import { getAllTaskController } from "../controllers/getAllTask.controller.js";
import { getSingleTaskController } from "../controllers/getSingleTask.controller.js";

const taskRouter = Router();

taskRouter.get("/", getAllTaskController);

taskRouter.get("/:address",getSingleTaskController);

export default taskRouter;