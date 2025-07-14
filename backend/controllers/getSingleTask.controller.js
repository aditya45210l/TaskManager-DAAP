
import Task from '../models/task.model.js';

export const getSingleTaskController= async(req,res,next) =>{
    try{
        const TaskId = req.params.id;
        const _task = await Task.findOne({id: TaskId});
        if(!_task){
            return res.status(404).json({ message: "Task not found" });
        }
        const type = _task.creator === req.user ? "creator": _task.claimer === req.user ? "claimer": _task.completer === req.user ? "completer":"other";
        const task = _task.toObject();
        task.type = type; // Add the type field to the task object
        console.log("Task fetched successfully:", task);
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