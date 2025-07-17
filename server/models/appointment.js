import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Booked", " Complete", "Canceled"],
        default: "Booked"
    },
    videoRoomLink: {
        type: String,
    }
});

const appointment = mongoose.model("appointment", appointmentSchema);

export default appointment;