import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

//routes import
import authRoutes from "./routes/auth.route.js"
import sessionRoutes from "./routes/session.route.js"
// import questionRoutes from "./routes/question.route.js"

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

// routes
app.use("/api/auth", authRoutes)
app.use("/api/sessions", sessionRoutes)
// app.use("/api/questions", questionRoutes)

// app.use("/api/ai/generate-questions", protect, generateInterviewQuestions)
// app.use("/api/ai/generate-explanation", protect, generateConceptExplanation)

// uploads routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Connected on ${PORT} !`);
});
