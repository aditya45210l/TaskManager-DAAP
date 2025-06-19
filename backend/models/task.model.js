import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      min: 0,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
      toLowerCase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 20,
      maxLength: 200,
      toLowerCase: true,
    },
    creator: {
      type: String,
      required: true,
      trim: true,
    },
    completer: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Created", "InProgress", "Verifing", "Completed"],
      default: "Created",
    },
    claimer: {
      type: String,
      required: true,
      trim: true,
    },
    reward: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // require: true,
      indexed: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
