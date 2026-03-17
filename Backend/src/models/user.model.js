import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select:false,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
    unique: true,
  },
  last_login: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
