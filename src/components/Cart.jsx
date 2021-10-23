import React, { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props) {
  const { order, handleBasketVisibility = Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className='cart red lighten-1 white-text' onClick={handleBasketVisibility}>
      <i className='small material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}
