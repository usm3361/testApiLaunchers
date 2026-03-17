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
import { authMiddleware } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/",authMiddleware, asyncHandler(getLaunchers));
router.get("/:id",authMiddleware, asyncHandler(getLauncherById));
router.post("/",authMiddleware, allowRoles("intel"), validateLauncher, asyncHandler(createLauncher));
router.delete("/:id",authMiddleware, allowRoles("intel"), asyncHandler(deleteLauncher));
router.put("/:id",authMiddleware, validateLauncher, asyncHandler(updateLauncher));

export default router;
