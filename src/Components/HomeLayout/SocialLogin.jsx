import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      {/* Login Section */}
      <h2 className="font-bold text-2xl py-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline w-full text-red-500">
          <FcGoogle size={24} />
          Login With Google
        </button>
        <button className="btn btn-outline w-full text-accent">
          <FaGithub size={24} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
