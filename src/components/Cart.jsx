import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
  let cartProducts = props.cartProducts;
  const setCartProducts = props.setCartProducts;

  const priceArr = cartProducts.map((element) => {
    return element.price;
  })

  const sum = priceArr.reduce((partialSum, a) => partialSum + a, 0);

  //programmatic navigation
  const navigate = useNavigate();
  const buy = () => {
    setCartProducts([]);
    navigate('/');
  };


  return (
    <div className="flex justify-between">

      {/* Left side - Cart icon and title */}
      <div className="flex items-center w-60 gap-2 border-2">
        <span className="text-3xl">Cart</span>
        <img src='src\assets\shopping-cart-8-svgrepo-com.svg'
          alt="Cart"
          className="w-12 h-12"
        />
      </div>

      {/* Right side - Items and total */}
      <div className="flex flex-col gap-4 w-dvw border-2">
        {cartProducts.map((element, index) => (
          <div
            key={index}
            className="flex justify-between items-stretch bg-blue-500 text-black px-16 p-2 rounded"
          >
            <span className="text-xl">{element.productName}</span>
            <span className="text-xl">{element.price}</span>
          </div>
        ))}

        <div className="flex justify-between items-center text-2xl mt-2">
          <span>Total = {sum}</span>
          <button className="bg-blue-500 text font-semibold py-4 rounded border-2" onClick={buy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
