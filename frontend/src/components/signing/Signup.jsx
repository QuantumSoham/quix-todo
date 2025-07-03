import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Left: Form */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center left-pane">
            <div className="w-75">
              <input
                className="p-2 my-3 w-100"
                type="email"
                name="email"
                placeholder="Re Enter Your Email"
              />
              <input
                className="p-2 my-3 w-100"
                type="text"
                name="username"
                placeholder="Re Enter Your Username"
              />
              <input
                className="p-2 my-3 w-100"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <button className="signup-btn w-100 mt-4" type="submit">
                Sign Up
              </button>
            </div>
          </div>
          {/* Middle: Vertical Line */}
          <div className="col-lg-1 d-flex justify-content-center align-items-center">
            <div className="vertical-line"></div>
          </div>
          {/* Right: Sign Up Heading */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center right-pane">
            <HeadingComp first={"Sign"} second={"Up"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
