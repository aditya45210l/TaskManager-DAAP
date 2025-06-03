import Task from '../models/task.model.js';

export const getAllTaskController = async(req, res, next) =>{
    try{
        const tasks = await Task.find();

        res.status(200).json({
            status:"success",
            message:"All tasks fetched successfully",
            data: tasks
        })
    }catch(error){
        next(error);
    }
}