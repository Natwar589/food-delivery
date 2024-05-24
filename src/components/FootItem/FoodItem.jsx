import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div 
    id="food-item"
    className=" food-items p-[15px] border-0  relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="food-items-image-container relative">
        <img className="rounded-md" src={image} />
        {!cartItems[id] ? (
          <img
            className="add absolute bottom-[15px] right-[15px] cursor-pointer border-r-[50%]"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-count absolute bottom-[15px] right-[15px] flex items-center gap-[15px] p-[6px]  bg-white rounded-full">
            <img
              onClick={() => {
                removeFromCart(id);
              }}
              className="remove-button"
              src={assets.remove_icon_red}
            />
            <p className="font-semibold font-mono">{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
              }}
              src={assets.add_icon_green}
              className=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info gap-4 flex flex-col">
        <div className="foot-item-name-rating flex justify-between items-center mt-[10px]">
          <p className="text-xl font-bold font-outfit">{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-decription">{description}</p>
        <div className="flex justify-between items-center">
          <p className="food-item-price text-[25px] font-bold font-mono text-[tomato]">
            <span>$</span>
            {price}
          </p>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
