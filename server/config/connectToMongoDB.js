import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const connectToDataBase=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("mongoDb connected SuccessFully!!")
    } catch (error) {
        console.log("error in connection with MongoDB !!:",error)
    }
}

