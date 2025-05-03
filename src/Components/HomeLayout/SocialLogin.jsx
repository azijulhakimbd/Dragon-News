import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

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
      {/* Finds Us */}
      <div>
        <h2 className="font-bold text-2xl py-5">Finds Us On</h2>
        <div className="flex justify-between">
          <Link to={"#"}>
            <FaFacebook />
            Facebook
          </Link>
          <Link to={"#"}>
            <FaTwitter />
            Twitter
          </Link>
          <Link to={"#"}>
            <FaInstagram />
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
