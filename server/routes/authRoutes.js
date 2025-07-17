import express from "express";

import { getAllUsers, LoginUser, registerUser } from "../controllers/authController.js";

const authRoutes = express.Router();

// Register Route
authRoutes.post("/register", registerUser)

// Login Route
authRoutes.post("/login", LoginUser);

// Get All Users Route
authRoutes.get("/getallusers", getAllUsers);

export default authRoutes;
