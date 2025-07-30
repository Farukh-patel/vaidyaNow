import express from "express"
import { GoogleGenerativeAI } from '@google/generative-ai'

import { connectToDataBase } from './config/connectToMongoDB.js';
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors';
const port = 3000;
const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes)
// Routes
app.get("/", (req, res) => {
    res.send("This is the home page!");
});


// Starting the server only after DB is connected
const startServer = async () => {
    try {
        await connectToDataBase();
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    } catch (error) {
        console.error("Server failed to start due to DB connection error.:", error);
    }
};

startServer();

// const axios = require('axios');
// const axios = require('axios');
import axios from 'axios'
const genAI = new GoogleGenerativeAI("AIzaSyBVgz8F7eGaHhjP2QQPqJlLlFsHifXw0Js");

    // const { content } = req.body;
const getAires=async()=>{
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(" i am feeling headEch ,and rough throat am i ill right now??");
        const aiReply = result.response.text();
        console.log("aiReply", aiReply);
    } catch (error) {
        console.error("Error:", error);
       
    }
};
getAires();

