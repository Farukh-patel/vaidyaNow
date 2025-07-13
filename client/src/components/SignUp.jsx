import React, { useContext } from 'react';
import themeContext from '../contexts/themeContext';
import { ToastContainer, toast } from 'react-toastify'

const Signup = () => {
  const { theme } = useContext(themeContext);
  const notify = () => toast.success('Signup successfull');
  const handleOnSignup = (e) => {
    e.preventDefault()
    notify()
  }
  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-tr from-purple-100 to-white text-gray-800'
          : 'bg-gradient-to-tr from-zinc-900 to-gray-800 text-amber-50'
      }`}
    >
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme={theme === 'light' ? 'light' : 'dark'}
        toastStyle={{
          minHeight: '45px',
          padding: '8px 12px',
          fontSize: '14px',
          borderRadius: '8px',
          marginTop:"60px"
        }}
      />

      <div
        className={`w-full max-w-xs p-5 rounded-2xl shadow-xl border transition-all duration-300 backdrop-blur-sm ${
          theme === 'light'
            ? 'bg-white/80 border-gray-200'
            : 'bg-zinc-800/60 border-zinc-700'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 tracking-tight">
          Create an Account 
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                theme === 'light'
                  ? 'bg-white border-gray-300 text-gray-800'
                  : 'bg-zinc-900 border-zinc-600 text-amber-50'
              }`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                theme === 'light'
                  ? 'bg-white border-gray-300 text-gray-800'
                  : 'bg-zinc-900 border-zinc-600 text-amber-50'
              }`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
                theme === 'light'
                  ? 'bg-white border-gray-300 text-gray-800'
                  : 'bg-zinc-900 border-zinc-600 text-amber-50'
              }`}
            />
          </div>

          <button
            type="submit"
            onClick={handleOnSignup}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-sm text-center">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
