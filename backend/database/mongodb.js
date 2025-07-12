import mongoose from "mongoose";
import { DB_URL } from "../configs/env.js";

const connectToDatabase = async () => {
  try {
    if(!DB_URL) {
      throw new Error("Database URL is not defined");
    }
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToDatabase;
