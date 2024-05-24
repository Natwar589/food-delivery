import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FootItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="">
      <h2 className="font-bold text-[25px] flex text-center justify-center">
        Top Dishes near you
      </h2>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[30px] mt-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
          if (category === "All" || category == item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
