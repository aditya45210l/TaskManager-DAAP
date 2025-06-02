import mongoose from "mongoose";
import { DB_URL } from "../configs/env.js";

const URI = "mongodb+srv://ak0295676:9XMg8gUmoYQY7OLp@cluster0.35nkcu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL || URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToDatabase;
