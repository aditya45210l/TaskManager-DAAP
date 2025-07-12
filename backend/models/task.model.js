import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    id:{type:Number,unique:true},
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    reward: { type: String, required: true, trim: true },
    creator: { type: String, required: true, trim: true },   // wallet address
    claimer: { type: String, default: null, trim: true },    // wallet address
    completer: { type: String, default: null, trim: true },  // wallet address
    // category:{type:String,default:"all",trim:true,require:false},
    status: {
      type: String,
      enum: ["Created", "InProgress", "Verifing", "Completed"],
      default: "Created",
    },
  },
  { timestamps: true }
);

const Task = model("Task",taskSchema);
export default Task;
