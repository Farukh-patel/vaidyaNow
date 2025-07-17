import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
      if (!name || !email || !password || !role) {
        res.json({
            status: 'error',
            message: "All fields are required",
        })
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: "error",
                message: "User already exists with this email",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            status: "success", 
            message: "User created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
        });
    } catch (error) {
        console.error("Register Error:", error.message);
        return res.status(500).json({
            status: "error",
            message: "Internal server error during registration",
        });
    }
};

export const LoginUser = async (req, res) => {
    const { email, password } = req.body;
      if ( !email || !password ) {
        res.json({
            status: 'error',
            message: "All fields are required",
        })
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: User not found",
            });
        }
        const token = jwt.sign(email, process.env.SECRET_KEY);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: Invalid password",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Logged in successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login Error:", error.message);
        return res.status(500).json({
            status: "error",
            message: "Internal server error during login",
        });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}, "-password"); // exclude passwords
        return res.status(200).json({
            status: "success",
            users,
        });
    } catch (error) {
        console.error("Get Users Error:", error.message);
        return res.status(500).json({
            status: "error",
            message: "Failed to fetch users",
        });
    }
}