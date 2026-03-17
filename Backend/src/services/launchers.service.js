import Launcher from "../models/Launcher.js";

export const getAllLaunchers = async () => {
  return await Launcher.find();
};

export const getLaunchersById = async (id) => {
  return await Launcher.findById(id);
};

export const createLauncher = async (data) => {
  const launcher = new Launcher(data);
  return await launcher.save();
};

export const updateLauncher = async (id, data) => {
  return await Launcher.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLauncher = async (id) => {
  return await Launcher.findByIdAndDelete(id);
};
