import express from 'express'
import { asyncHandler } from '../utils/asyncHandler.js'
import { deleteUserControl, loginControl, registerControl, updateUserControl } from './auth.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { allowRoles } from '../middleware/role.middleware.js'
import { getAllUsers, getUser } from './auth.service.js'

const router = express.Router()

router.post("/login",asyncHandler(loginControl))
router.post("/register/create", authMiddleware,allowRoles("admin"),asyncHandler(registerControl))
router.put("/register/update",authMiddleware,allowRoles("admin"),asyncHandler(updateUserControl))
router.delete("/register/delete",authMiddleware,allowRoles("admin",asyncHandler(deleteUserControl)))
router.get("/getUser",authMiddleware, asyncHandler(getUser))
router.get("/users",authMiddleware, allowRoles("admin"),asyncHandler(getAllUsers))


export default router