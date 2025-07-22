import React, { useContext } from 'react';
import themeContext from '../contexts/themeContext';

const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <footer className={`mt-16 py-4 text-center ${theme === "light" ? "bg-gray-200 text-gray-700" : "bg-gray-800 text-amber-100"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} HealthAssist. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
