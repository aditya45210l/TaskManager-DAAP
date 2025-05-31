import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/", (req, res) => {
  res.send("Task Router is working!");
});
taskRouter.get("/:address", (req, res) => {
  res.send(`Task Router is working for address: ${req.params.address}`);
});

export default taskRouter;