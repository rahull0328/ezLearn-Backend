import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path"

dotenv.config({})

const app = express()

//middlewares
app.use(express.json())
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 8000;

//routes
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

app.listen(PORT, () => {
//   connectDB();
  console.log(`Server Connected on ${PORT} !`);
});