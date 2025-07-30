import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

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

// Routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Connected on ${PORT} !`);
});
