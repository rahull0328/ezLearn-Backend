import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      return res.status(401).json({
        message: "Not authorized, no token!",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token Failed",
      error: error.message,
    });
  }
};
