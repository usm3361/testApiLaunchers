import Launcher from "../models/Launcher.js";

export const getLaunchers = async (req, res) => {
  const launchers = await Launcher.find();
  res.json(launchers);
};

export const getLauncherById = async (req, res) => {
  const launcher = await Launcher.findById(req.params.id);
  res.json(launcher);
};

export const createLauncher = async (req, res) => {
  const launcher = await new Launcher(req.body);
  const saved = await launcher.save();
  res.json(saved);
};

export const deleteLauncher = async(req,res)=>{
    await Launcher.findByIdAndDelete(req.params.id)
    res.json({msg:"Launchers successfully deleted"})
}
