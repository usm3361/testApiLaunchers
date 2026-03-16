import mongoose, { Schema } from "mongoose";

const launcherSchema = new mongoose.Schema({
  city: {
    type: String,
    require: true,
  },
  rocketType: {
    type: String,
    require: true,
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
  },
});

export default mongoose.model("Launcher", launcherSchema);
