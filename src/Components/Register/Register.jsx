import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser, setUser}=use(AuthContext)
  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
    .then((userCredential) => {
      // Signed up 
      const user=userCredential.user;
      setUser(user)
      
    })
    .catch((error) => {
      console.log(error);
      
      // ..
    });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <div className="border-t border-gray-200 mb-6"></div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
