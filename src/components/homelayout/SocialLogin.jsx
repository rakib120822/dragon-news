import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
  return (
    <div>
      <h2 className="font-bold mb-5">login with</h2>
      <div className="space-y-3">
        <button className="btn  btn-secondary btn-outline w-full ">
          {" "}
          <FcGoogle size={24} /> Login With Google
        </button>
        <button className="btn btn-outline btn-primary w-full ">
          <FaGithub size={24} /> Login With GitHub
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
