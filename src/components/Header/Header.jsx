import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
  return (
    <div
      style={{ "--image-url": `url(${assets.header_img})` }}
      className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center h-[35vw] my-[28px] mx-auto rounded-md relative"
    >
      {/* header content */}
      <div className="header-content absolute flex flex-col flex-1 items-start  gap-[1.5vw] max-w-[50%] bottom-[10%] left-[3vw] ">
        <h2 className="font-bold text-white text-[30px]">
          Order your <br /> favourite food here
        </h2>
        <p className="text-white text-balance">
          Explore our extensive menu featuring a diverse range of cuisines, from
          sizzling stir-fries to cheesy pizzas, succulent burgers to refreshing
          salads. With our easy-to-navigate website, ordering your favorite
          meals is just a few clicks away.
        </p>
        <button className="px-4  py-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 transition ease-in delay-75 bg-white rounded-sm ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
