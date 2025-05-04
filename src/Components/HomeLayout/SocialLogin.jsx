import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const {signInWithGoogle, setUser}=use(AuthContext);
const handleGoogleLogin=()=>{
  signInWithGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
   
    // The signed-in user info.
    const user = result.user;
    setUser(user)
  }).catch((error) => {
    alert(error)
    
  });
}
  return (
    <div>
      {/* Login Section */}
      <h2 className="font-bold text-2xl py-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full text-red-500">
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
