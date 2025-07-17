import express from "express"

import { connectToDataBase } from './config/connectToMongoDB.js';
import authRoutes from "./routes/authRoutes.js";
const port = 3000;
const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth",authRoutes)
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
