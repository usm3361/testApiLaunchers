import express from "express";
import {
  createLauncher,
  deleteLauncher,
  getLauncherById,
  getLaunchers,
} from "../controllers/launchers.controller.js";

const router = express.Router();

router.get("/", getLaunchers);
router.get("/:id", getLauncherById);
router.post("/", createLauncher);
router.delete("/:id", deleteLauncher);

export default router;
