import { Router } from "express";

const userRouter = Router();

userRouter.get("/",(req,res) =>{
    res.send("User Router is working!");
})

export default userRouter;