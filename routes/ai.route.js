import express from "express";
import {generateInterviewQuestions, generateConceptExplanation} from "../controllers/ai.controller.js"
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post("/generate-questions", protect, generateInterviewQuestions)
router.post("/generate-explanation", protect, generateConceptExplanation)

export default router;