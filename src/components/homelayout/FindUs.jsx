import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FindUs() {
  return (
    <div>
      <h2 className="font-bold">Find Us</h2>
      <div>
        <div className="join join-vertical  w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter/>Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram></FaInstagram>Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
