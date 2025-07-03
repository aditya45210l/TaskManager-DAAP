import { Router } from "express";

import { createUser, getProfile } from "../controllers/User/User.controller.js";

const userRouter = Router();

userRouter.get("/",getProfile)

userRouter.post("/create",createUser)
userRouter.put("/update",(req,res) =>{

})

export default userRouter;