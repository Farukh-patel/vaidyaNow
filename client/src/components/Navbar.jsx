import React, { useContext, useState } from 'react';
import themeContext from '../contexts/themeContext';
import { Link, useNavigate } from 'react-router-dom';
import { Home, LogOut, Moon, Sun, User, UserPlus } from 'lucide-react';
import useUser from '../hooks/useUser';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { theme, setTheme } = useContext(themeContext);
  const { user,setUser } = useUser();
  const navigate=useNavigate()
  const handleThemeTogle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <nav
      className={`w-full shadow-md fixed top-0  left-0 z-50 transition-all ${theme === 'light' ? 'bg-white text-gray-900 ' : 'bg-zinc-900 text-amber-50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-cyan-600">VaidyaNow</div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/"><Home /></Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/services">Services</Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/contactus">Contact Us</Link></li>
            <li className="hover:text-cyan-600 transition cursor-pointer"><Link to="/aboutus">About</Link></li>
          </ul>

          <div className="hidden md:flex space-x-4 items-center">
            {!user ?
              <>

                <Link to="/login">
                  <button className="bg-cyan-500 flex gap-1 cursor-pointer justify-center items-center text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
                    <User className='h-5' /> Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-cyan-500 flex gap-1 cursor-pointer justify-center items-center text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
                    <UserPlus className='h-5' /> Sign Up
                  </button>
                </Link>

              </>
              :
              <>
                <Link to="/profile">
                  <button className="bg-cyan-500 flex gap-1 cursor-pointer justify-center items-center text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
                    <User className='h-5' />My profile
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setUser(null);               // Clear user from context
                    localStorage.removeItem("token"); // If you're storing token
                    navigate("/login");          // Optional: redirect to login
                  }}
                  className="bg-cyan-500 flex gap-1 cursor-pointer justify-center items-center text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  <LogOut className='h-5' /> Logout
                </button>

              </>}
            <button
              className={`p-2 rounded-full transition ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-zinc-700'
                }`}
              onClick={handleThemeTogle}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Sun className='cursor-pointer' />
              ) : (
                <Moon className='cursor-pointer' />
              )}
            </button>
          </div>

          <button
            className={`md:hidden ${theme === 'light' ? 'text-gray-800' : 'text-white'
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
          className={`md:hidden px-4 pb-4 space-y-3 transition-all ${theme === 'light' ? 'bg-white text-black' : 'bg-zinc-800 text-amber-50'
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
