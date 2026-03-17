import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    enum: ["admin", "airforce", "intelligence"],
    required: true,
  },
});

export default mongoose.model("user", userSchema);
