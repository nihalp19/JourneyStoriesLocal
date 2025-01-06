import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider(); // Define the provider
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  font-sans" style={{ background: '#343434' }}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Welcome Back!
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="p-3 bg-black text-white rounded-lg focus:outline-none focus:ring-2 "
          >
            Login
          </button>
          <p className="text-sm text-black font-medium text-center mt-4">
            Do you have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
