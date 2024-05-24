import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Login.css";
const Login = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Signup");
  return (
    <div className="absolute z-10 bg-[#00000090] w-full h-full grid login-page">
      <form className="flex flex-col rounded-lg place-self-center bg-white w-[330px]  px-[25px] py-[30px] gap-[30px]">
        <div className="login-title w-full flex justify-center items-center">
          <h1 className="text-center font-bold text-3xl">{currState}</h1>
          <img
            className="absolute place-self-center right-[40%] cursor-pointer"
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
          />
        </div>
        <div className="input flex items-center justify-start flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className=" p-[10px] border-[#9b9b9bea] border rounded-md w-[95%]"
              placeholder="Your Name"
              required
              pattern="none"
            />
          )}
          <input
            className="p-[10px] border-[#9b9b9bea] border rounded-md w-[95%]"
            placeholder="Email"
            required
          />
          <input
            className="p-[10px] border-[#9b9b9bea] border rounded-md w-[95%]"
            placeholder="Password"
            required
          />
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <button className="w-[95%] px-4  py-2 rounded-md  transition ease-in delay-75 font-bold bg-[tomato] text-white ">
            {currState === "Login" ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="login-condtion flex gap-[10px] items-center justify-center">
          <input
            className="w-[20px] rounded-none cursor-pointer"
            type="checkbox"
          />
          <p>Accept Terms and Conditions</p>
        </div>
        <div className="flex items-center justify-center gap-[2px]">
          {currState === "Login" ? (
            <div>Create a New Account ?</div>
          ) : (
            <div>Already Have an Account ?</div>
          )}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => {
              currState === "Login"
                ? setCurrState("Signup")
                : setCurrState("Login");
            }}
          >
            {currState === "Signup" ? (
              <span>Login </span>
            ) : (
              <span>Click Here</span>
            )}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
