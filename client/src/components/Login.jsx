import React, { useContext } from 'react';
import themeContext from '../contexts/themeContext';

const Login = () => {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-tr from-blue-100 to-white text-gray-800'
          : 'bg-gradient-to-tr from-zinc-900 to-gray-800 text-amber-50'
      }`}
    >
      <div
        className={`w-full max-w-xs p-5 rounded-2xl shadow-xl border transition-all duration-300 backdrop-blur-sm ${
          theme === 'light'
            ? 'bg-white/80 border-gray-200'
            : 'bg-zinc-800/60 border-zinc-700'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 tracking-tight">
          Welcome Back 
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
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
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                theme === 'light'
                  ? 'bg-white border-gray-300 text-gray-800'
                  : 'bg-zinc-900 border-zinc-600 text-amber-50'
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-5 text-sm text-center">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
