import React,{useContext} from 'react'
import { CircleCheckBig } from 'lucide-react';
import themeContext from '../contexts/themeContext';
const Features = () => {
    const { theme } = useContext(themeContext);

    return (
        <>
            <div className={` ${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-amber-50"} `}>
                <h2 className="text-2xl font-bold ">Platform Features</h2>
                <div className="p-2 space-y-4 flex justify-center flex-wrap">
                    <div>

                        <div className="flex items-center gap-3 m-6 border-2 border-dashed border-gray-400 p-2 rounded-full">
                            <CircleCheckBig className="w-6 h-6 text-green-600" />
                            <span className="text-lg">AI Symptom Checker</span>
                        </div>

                        <div className="flex items-center gap-3 m-6 border-2 border-dashed border-gray-400 p-2 rounded-full">
                            <CircleCheckBig className="w-6 h-6 text-green-600" />
                            <span className="text-lg">Instant Video Consultation</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 m-6 border-2 border-dashed border-gray-400 p-2 rounded-full">

                            <CircleCheckBig className="w-6 h-6 text-green-600" />
                            <span className="text-lg">Doctor Profile Matching</span>
                        </div>
                        <div className="flex items-center gap-3 m-6 border-2 border-dashed border-gray-400 p-2 rounded-full">
                            <CircleCheckBig className="w-6 h-6 text-green-600" />
                            <span className="text-lg">Smart Medical Summary</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
