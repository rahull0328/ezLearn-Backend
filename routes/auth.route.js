import express from "express"
import {registerUser, loginUser, getUserProfile} from "../controllers/auth.controller.js"
import {protect} from "../middlewares/authMiddleware.js"

const router = express.Router()

//auth routes
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", protect, getUserProfile)

export default router;