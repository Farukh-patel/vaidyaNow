import React from 'react'
import { doctors } from '../assets/doctors'
const Doctors = () => {
    return (
        <div>
            {
                doctors.map(doctor =>
                    <div key={doctor.id} className="border rounded-xl p-4 shadow-md flex gap-4 items-center">
                        <img src={doctor.profileImage} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                            <h2 className="text-lg font-semibold">{doctor.name}</h2>
                            <p className="text-sm text-gray-600">{doctor.speciality} • {doctor.location}</p>
                            <p className="text-sm text-gray-500">{doctor.experience} years experience</p>
                            <p className="text-sm text-yellow-600">⭐{doctor.rating}</p>
                            <p className={`text-sm ${doctor.isAvailable ? "text-green-600" : "text-red-600"}`}>
                                {doctor.isAvailable ? "Available Now" : "Not Available Now"}
                            </p>
                            <div className="flex gap-2 mt-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">Chat</button>
                                <button className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer">Video Call</button>
                                <button className="bg-purple-500 text-white px-3 py-1 rounded cursor-pointer">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Doctors
