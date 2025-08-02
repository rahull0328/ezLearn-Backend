import { Session } from "../models/session.model.js";
import { Question } from "../models/question.model.js";

export const createSession = async (req, res) => {
    try {
        const {role, experience, topicsToFocus, description, questions} = req.body
        const userId = req.user._id

        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description
        })

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer
                })
                return question._id
            })
        )

        session.questions = questionDocs
        await session.save()

        return res.status(201).json({
            success: true,
            session
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

export const getSessionById = async (req, res) => {

}

export const getMySession = async (req, res) => {
    try {
        const sessions = await Session.find({user: req.user.id})
        .sort({createdAt: -1})
        .populate("questions")
        return res.status(200).json(sessions)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}

export const deleteSession = async (req, res) => {

}