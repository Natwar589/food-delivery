import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  let total = getTotalCartAmount() + 2;
  //total = total + 2;

  return (
    <div className="place-order flex items-start justify-between gap-[50px] mt-[100px]">
      <form className="place-order-left w-full max-w-[max(30%,500px)]">
        <h1 className="place-order-header text-[30px] font-bold mb-[50px] ">
          Delivery Information
        </h1>
        <div className="mulit-field flex gap-[10px]">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="mulit-field flex gap-[10px]">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="mulit-field flex gap-[10px]">
          <input type="text" placeholder="Zip-code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </form>
      <div className="place-order-right mt-[100px]">
        <div className="cart-total flex-1 flex flex-col gap-[10px] justify-between text-[#555]">
          <h2 className="text-2xl font-bold ">Cart Total</h2>
          <div className="cart-total-details flex gap-[10px] flex-col">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="mx-[10px] my-[0px]" />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="mx-[10px] my-[0px]" />
            <div className="flex justify-between">
              <b>Total</b>
              <p>${getTotalCartAmount() === 0 ? 0 : total}</p>
            </div>
          </div>
          <button className="border-none rounded-md text-white bg-[tomato] mt-[7px] w-[max(15vw,300px)] px-[12px] py-[6px]">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
