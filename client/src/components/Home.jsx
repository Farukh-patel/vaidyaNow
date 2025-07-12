import React, { useContext } from 'react';
import themeContext from '../contexts/themeContext';

const Home = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-zinc-800 text-amber-50"} `}>
      <div className='p-30'>
      <div className="text-center py-6 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          “Check Your Symptoms Instantly & Talk to a Real Doctor”
        </h1>
        <p className="text-base sm:text-lg">
          AI-powered health assistant + video consultations with certified doctors.
        </p>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">How It Works</h2>
      </div>

      <div className="flex justify-center mb-6 px-4">
        <div className="flex flex-wrap justify-center gap-3 max-w-screen-md w-full">
          <div className="shadow-md rounded-lg p-3 w-36 sm:w-40 flex flex-col items-center  dark:bg-zinc-700">
            <img src="notepad.png" alt="Notepad" className="h-10 mb-2" />
            <span className="font-bold text-green-600 text-sm">STEP 1</span>
            <p className="text-center text-xs sm:text-sm mt-1">Enter Your Symptoms</p>
          </div>

          <div className="flex items-center justify-center text-xl text-gray-400">
            &gt;
          </div>

          <div className="shadow-md rounded-lg p-3 w-36 sm:w-40 flex flex-col items-center  dark:bg-zinc-700">
            <img src="robot.png" alt="AI Bot" className="h-10 mb-2" />
            <span className="font-bold text-green-600 text-sm">STEP 2</span>
            <p className="text-center text-xs sm:text-sm mt-1">AI Analyzes Info</p>
          </div>

          <div className="flex items-center justify-center text-xl text-gray-400">
            &gt;
          </div>

          <div className="shadow-md rounded-lg p-3 w-36 sm:w-40 flex flex-col items-center ">
            <img src="doctor.png" alt="Doctor" className="h-10 mb-2" />
            <span className="font-bold text-green-600 text-sm">STEP 3</span>
            <p className="text-center text-xs sm:text-sm mt-1">Connect to Doctor</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 mb-10">
        <textarea
          className={`w-full max-w-md min-h-[100px] p-3 rounded-lg border text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${theme === "light" ? "placeholder:text-gray-800 bg-white" : "placeholder:text-amber-50 bg-zinc-700"}`}
          placeholder="Describe your symptoms, how frequent they are, your age, etc."
        />
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-5 py-2 rounded-lg shadow-md transition duration-200">
          Generate ✨
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
