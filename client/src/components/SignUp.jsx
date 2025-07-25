import React, { useContext, useState, useEffect } from 'react';
import themeContext from '../contexts/themeContext';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCaptcha from 'react-google-recaptcha'
const Signup = () => {
  const navigate = useNavigate();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const { theme } = useContext(themeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

  });
  useEffect(() => {
    notify("wellcome to vaiDyaNow");
  }, [])

  const notify = (text) => toast.success(text);
  const handleOnSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/register", formData);
      console.log(res);
      navigate("/login", {
        state: { toastMessage: "SignUp complete! Please login to continue." }
      });
    } catch (error) {
      toast.error("SignUp failed. Please try again.");
    }

  }
  return (
    <div
      className={`min-h-screen  flex items-center justify-center transition-all duration-300 ${theme === 'light'
        ? 'bg-gradient-to-tr from-purple-100 to-white text-gray-800'
        : 'bg-gradient-to-tr from-zinc-900 to-gray-800 text-amber-50'
        } overflow-y-auto`}
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
        className={`w-full mt-15 max-w-sm p-5 rounded-2xl shadow-xl border transition-all duration-300 backdrop-blur-sm ${theme === 'light'
          ? 'bg-white/80 border-gray-200'
          : 'bg-zinc-800/60 border-zinc-700'
          }`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 tracking-tight">
          Create an Account
        </h2>

        <form onSubmit={handleOnSignup} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${theme === 'light'
                ? 'bg-white border-gray-300 text-gray-800'
                : 'bg-zinc-900 border-zinc-600 text-amber-50'
                }`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              onChange={e => setFormData({ ...formData, email: e.target.value })}

              type="email"
              placeholder="you@example.com"
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${theme === 'light'
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
              className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${theme === 'light'
                ? 'bg-white border-gray-300 text-gray-800'
                : 'bg-zinc-900 border-zinc-600 text-amber-50'
                }`}
            />
          </div>
          <ReCaptcha
            sitekey="6Lf-O4srAAAAAGjHM_aWUpW772MqvQaXgom9h0wb"
            onChange={(token) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
          />
          <button
            type="submit"
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
