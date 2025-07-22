import React, { useContext } from 'react';
import { CircleCheckBig } from 'lucide-react';
import themeContext from '../contexts/themeContext';

const features = [
  "AI Symptom Checker",
  "Instant Video Consultation",
  "Doctor Profile Matching",
  "Smart Medical Summary"
];

const Features = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className={`py-8 px-4 ${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-amber-50"}`}>
      <h2 className="text-2xl font-bold text-center mb-6">Platform Features</h2>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-2 border-2 border-dashed border-gray-400 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition hover:scale-105  dark:bg-zinc-800"
          >
            <CircleCheckBig className="w-5 h-5 text-green-600" />
            <span className="text-sm sm:text-base font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
