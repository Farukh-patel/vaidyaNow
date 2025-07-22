import React,{useContext} from 'react';
import { doctors } from '../assets/doctors';
import themeContext from '../contexts/themeContext';

const Doctors = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {doctors.map(doctor => (
        <div key={doctor.id} className={` ${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-amber-50"}  border rounded-xl p-4 shadow hover:shadow-lg transition`}>
          <div className="flex gap-4 items-center">
            <img src={doctor.profileImage} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-600 dark:text-amber-100">{doctor.speciality} • {doctor.location}</p>
              <p className="text-sm text-gray-500">{doctor.experience} years experience</p>
              <p className="text-sm text-yellow-600">⭐{doctor.rating}</p>
              <p className={`text-sm ${doctor.isAvailable ? "text-green-600" : "text-red-600"}`}>
                {doctor.isAvailable ? "Available Now" : "Not Available Now"}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 justify-center sm:justify-start">
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Chat</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Video Call</button>
            <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
