import { GoogleGenAI } from "@google/genai";
import {conceptExplainPrompt} from "../utils/prompt.js"

export const generateConceptExplanation = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

export const generateInterviewQuestions = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}