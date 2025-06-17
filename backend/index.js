import express from "express";
import taskRouter from "./routers/task.router.js";
import userRouter from "./routers/user.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import connectToDatabase from "./database/mongodb.js";
import { watchAllEvents } from "./listning.js";
import { PORT } from "./configs/env.js";
import cors from "cors";
import { handleTaskCreated } from "./controllers/taskCreated.controller.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Task Management API",
  });
});
app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToDatabase();
  // await handleTaskCreated();
  // await watchAllEvents();
});
