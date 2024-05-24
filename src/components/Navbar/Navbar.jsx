import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ setShowlogin }) => {
  const [active, setactive] = useState("");
  const navigate = useNavigate();
  return (
    <div className="navbar flex items-center justify-between mb-[30px]">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="logo w-[150px] flex items-center"
      />
      <div className="navbar-menu">
        <ul className=" flex gap-[20px] text-[#49557e] text-[18px] font-[outfit] cursor-pointer">
          <a
            onClick={() => {
              setactive("home");
            }}
            className={
              active === "home" ? "pb-[5px] border-b-2 border-black" : ""
            }
          >
            home
          </a>
          <a
            href="#menu"
            onClick={() => {
              setactive("menu");
            }}
            className={
              active === "menu" ? "pb-[5px] border-b-2 border-black" : ""
            }
          >
            menu
          </a>

          <a
            href="#footer"
            onClick={() => {
              setactive("contact-us");
            }}
            className={
              active === "contact-us" ? "pb-[5px] border-b-2 border-black" : ""
            }
          >
            contact-us
          </a>
        </ul>
      </div>
      <div className="navbar-right flex items-center gap-[30px]">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button
          onClick={() => setShowlogin(true)}
          className="px-3 py-2 bg-[tomato] rounded-sm font-serif text-white hover:scale-110 translate-x-1 transition ease-in-out delay-150 shadow-[3.0px_5.0px_5.0px_rgba(0,0,0,0.38)] hover: duration-300 "
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
