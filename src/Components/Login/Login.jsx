import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <div className="border-t border-gray-200 mb-6"></div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don’t Have An Account?{" "}
          <Link to={'/auth/register'} className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
