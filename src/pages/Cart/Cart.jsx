import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Navigate = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  // Determine if the cart is empty
  const isCartEmpty = !Object.values(cartItems).some(
    (quantity) => quantity > 0
  );
  let total = getTotalCartAmount() + 2;
  //total = total + 2;

  return (
    <div className="mt-[100px]">
      <div className="">
        <div className="grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] font-bold items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {isCartEmpty ? (
          <div className="text-center font-bold mt-[100px] text-3xl">
            Cart is Empty
          </div>
        ) : (
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="cart-item grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] mt-[30px] items-center text-gray-500 text-[max(1vw,12px)]"
                >
                  <img
                    className="w-[60px] rounded-md"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="p-[7px] bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)]">
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
          <button
            onClick={() => {
              getTotalCartAmount() === 0
                ? alert("There is no item in the cart")
                : Navigate("/order");
            }}
            className="border-none rounded-md text-white bg-[tomato] mt-[7px] w-[max(15vw,300px)] px-[12px] py-[6px]"
          >
            Proceed to Check out
          </button>
        </div>
        <div>
          <div className="flex-1 card-promocode">
            <p className="text-[#555]  text-lg promo-p">
              If you have a promo code, Enter here
            </p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] ">
              <input
                placeholder="Promo code"
                className="bg-transparent border-none outline-none pl-[10px]"
              />
              <button className="w-[max(10vw,150px)] px-[12px] py-[5px] bg-black text-white ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
