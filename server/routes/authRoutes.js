import express from "express" 
import userModel from "../models/user.js"

const authRoutes = express.Router();

app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await userModel.create({ name, email, password, role });
        res.json(
            {
                "status": "success",
                "message": "user cretaed successfully!",
                "user": user
            })
    } catch (error) {
        res.send("error in creating the user!! : ", error.message)
        console.log(error.message)
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            res.json(
                {
                    "status": "success",
                    "message": "login successfull !",
                    "user": user
                })
        };
    } catch (error) {
        res.send("error in logging in !! : ", error.message)
        console.log(error.message)
    }
});

app.get("/getallusers", async (req, res) => {
    try {
        let users = await userModel.find({});
        res.send(users)
    } catch (error) {
        console.log("error in getting all users!!")
    }
});

export default authRoutes;