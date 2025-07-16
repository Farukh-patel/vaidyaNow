import React, { useState, useEffect, useContext } from 'react';
import themeContext from '../contexts/themeContext';
import Features from './Features';

const reviews = [
    {
        name: "Sarah Ali",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "The AI symptom checker is a game-changer! It helped me understand my condition within minutes and guided me to the right doctor. I had a video consultation the same day and didn’t even need to leave my house. The whole process was smooth, efficient, and incredibly modern. I’m beyond impressed with how easy it all was!"
    },
    {
        name: "Ahmed Khan",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        text: "This platform is the future of healthcare. The AI checker is surprisingly accurate — it narrowed my symptoms better than a Google search ever could. Within minutes, I was booked for a chat with a specialist who already had my details. Seamless, smart, and efficient. Highly recommended!"
    },
    {
        name: "Neha Patel",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        text: "I was skeptical about using an AI to check symptoms, but I was pleasantly surprised. It asked thoughtful questions and suggested a few possible conditions. Then, I was able to chat with a doctor directly, who confirmed the diagnosis. Super convenient and I didn’t even have to take a day off!"
    },
    {
        name: "Jason Miller",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "What a brilliant idea! I used the symptom checker during lunch and had a video call with a doctor within 20 minutes. The AI suggested I might have a mild throat infection — the doctor confirmed it and prescribed medication right away. No travel, no wait, and total peace of mind."
    },
    {
        name: "Meera Chopra",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "I’m so thankful for this platform. The AI made it incredibly easy to describe what I was feeling, even when I wasn’t sure how to explain it. It matched me with the right specialist and saved me from unnecessary clinic visits. Truly convenient and smart healthcare!"
    },
    {
        name: "Ravi Verma",
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        text: "The AI tool is not just smart, it’s comforting. It asked the right questions and didn’t overwhelm me. I felt more prepared when I finally spoke to the doctor. The video consultation was smooth and the doctor had already seen the AI’s summary. Highly efficient system!"
    },
    {
        name: "Emily Zhang",
        image: "https://randomuser.me/api/portraits/women/75.jpg",
        text: "I love how this platform integrates technology with personal care. The AI checker is intuitive and accurate, and the ability to book instantly with a real doctor afterward is amazing. I even chose a physical visit after my video consultation — such flexibility is rare!"
    },
    {
        name: "Karan Malhotra",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
        text: "The platform is incredibly user-friendly. I used the symptom checker late at night and still got help quickly. The AI gave a summary that the doctor appreciated. No repeated explanations, no long waits — just fast, smart healthcare. Loved it!"
    },
    {
        name: "Amina Yusuf",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "Honestly, I was blown away. The AI felt like talking to a real assistant. It asked about my symptoms clearly, gave useful insights, and connected me with a doctor instantly. The chat option made things even easier for me since I was traveling at the time."
    },
    {
        name: "Daniel Roy",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        text: "As someone who avoids clinics, this platform is perfect. The AI helped me decide if I needed to see a doctor — turns out I did. I chose a chat consultation first, then booked a physical visit. The whole system works like magic. Really well thought out."
    },
    {
        name: "Sana Sheikh",
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        text: "This is the future of primary care. I used the AI symptom checker for my child and it gave me quick guidance on whether to worry or not. We had a video consult within 30 minutes. Everything was smooth, reliable, and super parent-friendly."
    },
    {
        name: "Vikram Sinha",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
        text: "Amazing experience from start to finish. The AI asked smarter questions than most online tools, and my doctor appreciated the data it generated. It feels like the platform truly respects your time. You can chat, video call, or even visit — the choice is yours."
    }
];


const ReviewContainer = () => {
    const { theme } = useContext(themeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextReview();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const { name, image, text } = reviews[currentIndex];

return (
    <>

       <div className="flex flex-col w-full">

            <div className="w-full md:w-full p-6 ">
                <Features />
            </div>

            <div
                className={`w-full flex flex-col items-center justify-center px-4 py-10 transition-colors duration-300 ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-amber-50'}`}
            >
                <h1 className="text-2xl sm:text-4xl font-bold mb-10">Patient Reviews</h1>

                <div
                    className="flex items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button
                        onClick={prevReview}
                        className={`text-4xl sm:text-5xl p-4 rounded-full transition hover:scale-105 ${theme === 'light' ? 'text-gray-700 hover:text-gray-500' : 'text-amber-100 hover:text-amber-300'}`}
                        aria-label="Previous review"
                    >
                        &lt;
                    </button>

                    <div
                        className={`rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-2xl transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-zinc-800 text-amber-50'}`}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={image}
                                alt={name}
                                className="w-20 h-20 rounded-full object-cover shadow-md"
                            />
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold">{name}</h2>
                                <p className="mt-3 text-justify leading-relaxed text-sm sm:text-base">
                                    {text}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={nextReview}
                        className={`text-4xl sm:text-5xl p-4 rounded-full transition hover:scale-105 ${theme === 'light' ? 'text-gray-700 hover:text-gray-500' : 'text-amber-100 hover:text-amber-300'}`}
                        aria-label="Next review"
                    >
                        &gt;
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {reviews.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2.5 h-2.5 rounded-full transition ${idx === currentIndex
                                ? theme === 'light'
                                    ? 'bg-gray-800'
                                    : 'bg-amber-50'
                                : theme === 'light'
                                    ? 'bg-gray-400'
                                    : 'bg-zinc-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
);
};

export default ReviewContainer;
