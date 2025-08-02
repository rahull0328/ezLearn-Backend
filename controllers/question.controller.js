import { Question } from "../models/question.model.js";
import { Session } from "../models/session.model.js";

export const addQuestionsToSession = async (req, res) => {
    try {
        const {sessionId, questions} = req.body

        if(!sessionId || !questions || !Array.isArray(questions)) {
            return res.status(400).json({
                message: "Invalid input data"
            })
        }

        const session = await Session.findById(sessionId)

        if(!session) {
            return res.status(404).json({
                message: "Session not found"
            })
        }

        //create new questions
        const createdQuestions = await Question.insertMany(
            questions.map((q) => ({
                session: sessionId,
                question: q.question,
                answer: q.answer,
            }))
        )

        //update session to include new question IDS
        session.questions.push(...createdQuestions.map((q) => q._id))
        await session.save()

        return res.status(201).json(createdQuestions)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }   
}

export const togglePinQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id)

        if(!question) {
            return res.status(404).json({
                message: "Question not found"
            })
        }

        question.isPinned = !question.isPinned
        await question.save()

        return res.status(200).json({
            success: true,
            question
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

export const updateQuestionNote = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}