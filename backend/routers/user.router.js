import { Router } from "express";

import { createUser, getProfile,updateUser } from "../controllers/User/User.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/",authMiddleware,getProfile);

userRouter.post("/create",authMiddleware, createUser);
userRouter.put("/update",authMiddleware, updateUser);
// userRouter.put("/update", (req, res) => {});

export default userRouter;
