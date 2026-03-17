import mongoose, { Schema } from "mongoose";

const launcherSchema = new mongoose.Schema({
  city: {
    type: String,
    require: true,
    trim: true,
  },
  rocketType: {
    type: String,
    require: true,
    enum: ["Shahab3", "Fetah110", "Radwan", "Kheibar"],
  },
  latitude: {
    type: Number,
    require: true,
  },
  longitude: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  destroyed: { type: Boolean, default: false },
});

export default mongoose.model("Launcher", launcherSchema);
