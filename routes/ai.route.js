import express from "express";
import {generateInterviewQuestions, generateConceptExplanation} from "../controllers/ai.controller.js"
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.get("/api/ai/generate-questions", protect, generateInterviewQuestions)
router.get("/api/ai/generate-explanation", protect, generateConceptExplanation)

export default router;