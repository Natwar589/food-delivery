import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="text-white bg-gray-800 flex flex-col justify-center item-center 
       gap-[20px] pl-[20px] pr-[20px] pt-[80px] mt-[100px] footer"
      id="footer"
    >
      <div className="footer-content w-[100%] grid grid-cols-[2fr,1fr,1fr]  gap-[80px]">
        <div className="footer-left flex gap-[20px] items-start flex-col ">
          <img src={assets.logo} />
          <p>
            Sure, here's some dummy text (Lorem Ipsum) you can use: Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
            nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque
            enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue
            eget, auctor vitae massa.
          </p>
          <div className="footer-social-icons flex w-[40px] gap-1">
            <img src={assets.facebook_icon} />
            <img src={assets.linkedin_icon} />
            <img src={assets.twitter_icon} />
          </div>
        </div>
        <div className="footer-center flex gap-[20px] items-start flex-col">
          <h1 className="text-[25px] text-white font-bold ">Company</h1>
          <ul className="cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right flex gap-[20px] items-start flex-col">
          <h1 className="text-[25px] text-white font-bold">Get In Touch</h1>
          <ul>
            <li>+1-22-33-444-12</li>
            <li>contactus@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-500 border-none" />
      <p className="footer-copyright  flex text-center items-center justify-center">
        Copyright 2024 &#169; Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
