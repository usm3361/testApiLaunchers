import express from "express";
import {
  createLauncher,
  deleteLauncher,
  getLauncherById,
  getLaunchers,
  updateLauncher,
} from "../controllers/launchers.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateLauncher } from "../middleware/launcher.validation.js";

const router = express.Router();

router.get("/", asyncHandler(getLaunchers));
router.get("/:id", asyncHandler(getLauncherById));
router.post("/", validateLauncher, asyncHandler(createLauncher));
router.delete("/:id", asyncHandler(deleteLauncher));
router.put("/:id", validateLauncher, asyncHandler(updateLauncher));

export default router;
