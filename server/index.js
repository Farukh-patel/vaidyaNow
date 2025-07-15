const express = require('express');

const  userModel =require("./models/user")
const { connectToDataBase } = require('./config/connectToMongoDB');
// const { use } = require('react');
const user = require('./models/user');

const port = 3000;
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("This is the home page!");
});

app.get("/send", async (req, res) => {
    try {
        let user = await userModel.create({
            name: "farukh",
            email: "farukh@gmail.com",
            password: "12345",
            role: "patient",

        });
        res.send("user created", user)
    } catch (error) {
        res.send("error in creating the user!! : ",error.message)
    }
})

app.get("/getallusers",async(req,res)=>{
    try {
        let users=await userModel.find({});
        res.send(users)
    } catch (error) {
        console.log("error in getting all users!!")
    }
})

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
