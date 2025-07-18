import React, { useContext, useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import themeContext from '../contexts/themeContext';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { theme } = useContext(themeContext);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ show toast when arriving with state
  useEffect(() => {
  if (location.state?.toastMessage) {
    toast.success(location.state.toastMessage);
    navigate(location.pathname, { replace: true }); // clear state
  }
}, [location, navigate]);


const handleOnLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/api/v1/auth/login", formData);
    if (res.data.status === "success") {
      toast.success('Login successful', {
        onClose: () => navigate("/"), // redirect after toast closes
        autoClose: 1500
      });
    } else {
      toast.error('Invalid credentials');
    }
  } catch (err) {
    toast.error("Login failed. Please try again.");
  }
};

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${theme === 'light'
        ? 'bg-gradient-to-tr from-blue-100 to-white text-gray-800'
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
          marginTop: "60px"
        }}
      />

      <div
        className={`w-full max-w-xs p-5 rounded-2xl shadow-xl border transition-all duration-300 backdrop-blur-sm ${theme === 'light'
          ? 'bg-white/80 border-gray-200'
          : 'bg-zinc-800/60 border-zinc-700'
          }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 tracking-tight">
          Welcome Back
        </h2>

        <form onSubmit={handleOnLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              type="email"
              placeholder="you@example.com"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${theme === 'light'
                ? 'bg-white border-gray-300 text-gray-800'
                : 'bg-zinc-900 border-zinc-600 text-amber-50'
                }`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              onChange={e => setFormData({ ...formData, password: e.target.value })}

              type="password"
              placeholder="••••••••"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${theme === 'light'
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
