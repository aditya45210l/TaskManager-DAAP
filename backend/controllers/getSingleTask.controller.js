
import Task from '../models/task.model.js';

export const getSingleTaskController= async(req,res,next) =>{
    try{
        const taskOwnerAddress = req.params.address;
        const task = await Task.findOne({creator: taskOwnerAddress});
        if(!task){
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({
            status: "success",
            message: "Task fetched successfully",
            data: task,
            
        })
    }catch(error){
        console.error("Error in getSingleTaskController:", error);
        res.status(500).json({ message: "Internal Server Error" });
        next(error);
    }
}