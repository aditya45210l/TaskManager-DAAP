import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    wallet: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Default to 0 for new users
    rating: {
      type: Number,
      default: 0,
    },
    earning: {
      type: BigInt,
      default: 0,
    },

    // References to Task IDs
    claimed: [
      {
        type: Types.ObjectId,
        ref: "Task",
      },
    ],
    created: [
      {
        type: Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
