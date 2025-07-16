import React, { useContext, useState } from 'react';
import themeContext from '../contexts/themeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { theme, setTheme } = useContext(themeContext);

  const handleThemeTogle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <nav
      className={`w-full shadow-md fixed top-0  left-0 z-50 transition-all ${
        theme === 'light' ? 'bg-white text-gray-900 ' : 'bg-zinc-900 text-amber-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-cyan-600">VaidyaNow</div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/services">Services</Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/contactus">Contact Us</Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/aboutus">About</Link></li>
          </ul>

          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/login">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                Sign Up
              </button>
            </Link>

            <button
              className={`p-2 rounded-full transition ${
                theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-zinc-700'
              }`}
              onClick={handleThemeTogle}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-amber-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            className={`md:hidden ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 space-y-3 transition-all ${
            theme === 'light' ? 'bg-white text-black' : 'bg-zinc-800 text-amber-50'
          }`}
        >
          <span className="block hover:text-cyan-600 cursor-pointer"><Link to="/">Home</Link></span>
          <span className="block hover:text-cyan-600 cursor-pointer"><Link to="/services">Services</Link></span>
          <span className="block hover:text-cyan-600 cursor-pointer"><Link to="/contactus">Contact Us</Link></span>
          <span className="block hover:text-cyan-600 cursor-pointer"><Link to="/aboutus">About</Link></span>
          <Link to="/login">
            <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
