const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session"
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    note: {
        type: String
    },
    isPinned: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Questions", questionSchema)