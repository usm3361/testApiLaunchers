import * as launcherService from "../services/launchers.service.js";

export const getLaunchers = async (req, res) => {
  const launchers = await launcherService.getAllLaunchers();
  res.json(launchers);
};

export const getLauncherById = async (req, res) => {
  const launcher = await launcherService.getLaunchersById(req.params.id);
  if (!launcher) {
    const err = new Error("Launcher not found");
    err.status = 404;
    throw err;
  }
  res.json(launcher);
};

export const createLauncher = async (req, res) => {
  const launcher = await launcherService.createLauncher(req.body);
  res.status(201).json(launcher);
};

export const deleteLauncher = async (req, res) => {
  const deleted = await launcherService.deleteLauncher(req.params.id);
  if (!deleted) {
    const err = new Error("Launcher not found");
    err.status = 404;
    throw err;
  }
  res.json({ msg: "Launcher deleted" });
};

export const updateLauncher = async (req, res) => {
  const updated = await launcherService.updateLauncher(req.params.id, req.body);
  if (!updated) {
    const err = new Error("Launcher not found");
    err.status = 404;
    throw err;
  }
  res.json(updated);
};
