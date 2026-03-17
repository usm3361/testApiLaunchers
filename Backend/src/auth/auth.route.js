import express from 'express'
import { asyncHandler } from '../utils/asyncHandler.js'
import { deleteUserControl, getUserControl, getUsersControll, loginControl, registerControl, updateUserControl } from './auth.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { allowRoles } from '../middleware/role.middleware.js'

const router = express.Router()

router.post("/login",asyncHandler(loginControl))
router.post("/register/create", authMiddleware,allowRoles("admin"),asyncHandler(registerControl))
router.put("/register/update",authMiddleware,allowRoles("admin"),asyncHandler(updateUserControl))
router.delete("/register/delete/:id",authMiddleware,allowRoles("admin",asyncHandler(deleteUserControl)))
router.get("/getUser",authMiddleware, asyncHandler(getUserControl))
router.get("/users",authMiddleware, allowRoles("admin"),asyncHandler(getUsersControll))


export default router