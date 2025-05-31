import mongoose from "mongoose";
import { transactionType } from "viem";
import { DB_URL } from "../configs/env.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToDatabase;
