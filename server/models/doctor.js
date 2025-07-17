import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specialization:{
        type:String,
        required:true,

    },
    experience:{
        type:String,
        required:true,
    },
    profilePhoto:{
        type:String,
        required:true
    },
    awailability:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        required:true
    }
});

const doctor=mongoose.model("doctor",doctorSchema);

export default doctor;