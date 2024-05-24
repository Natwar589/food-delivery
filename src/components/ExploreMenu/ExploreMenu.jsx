import React from "react";
import { menu_list } from "../../assets/assets";
import "./Explore.css";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div 
    id="menu"
    className="menu flex flex-col gap-[20px]">
      <h1 className="menu-header text-xl font-bold">Explore Our Menu</h1>
      <p className="menu-content max-w-[100%]">
        Choose from the diverse menu featuring a delectable array of dishes. Our
        mission is to serve you as well as we can.
      </p>
      <div className="menu-list flex gap-[30px] overflow-y-hidden justify-center items-center text-center">
        {menu_list.map((item, index) => (
          <div
            onClick={() => {
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              );
            }}
            className="cursor-pointer hover:scale-105 transition-all duration-75"
            key={index}
          >
            <img
              className={`min-w-[80px] w-[7.5vw] rounded-full shadow-[2.0px_5.0px_5.0px_rgba(0.1,0.1,0.1,0.38)] 
              ${
                category === item.menu_name
                  ? "border-[5px] p-[4px] border-[tomato]"
                  : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-3 text-gray-800 font-bold">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[100%] m-[30px] h-[1px] bg-gray-400 flex items-center justify-center" />
    </div>
  );
};

export default ExploreMenu;
