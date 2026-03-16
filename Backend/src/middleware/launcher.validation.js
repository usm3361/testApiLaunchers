import Launcher from "../models/Launcher.js";

const validRocketType = ["Shahab3", "Fetah110", "Radwan", "Kheibar"];

export const validateLauncher = async (req, res, next) => {
  const { name, rocketType, latitude, longitude, city } = req.body;

  if (!name || !rocketType || !latitude || !longitude || !city) {
    return res.status(400).json({
      error: "All fields are requierd",
    });
  }
  if (!validRocketType.includes(rocketType)) {
    return res.status(400).json({
      error: "invalid rocket type",
    });
  }
  const existLauncher = await Launcher.findOne({ name });
  if (existLauncher) {
    return res.status(400).json({
      error: "The launcher with this name already exists",
    });
  }
  next();
};
