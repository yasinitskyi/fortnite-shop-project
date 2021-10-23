import React, { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

export default function BasketList() {
  const {
    order = [],
    handleBasketVisibility = Function.prototype,
  } = useContext(ShopContext);
  const totalPrice = order.reduce((price, el) => {
    return price + el.heal * el.quantity;
  }, 0);
  return (
    <>
      <div className='overlay'></div>
      <ul className='collection collection_overlayed'>
        <div className='close-icon' onClick={handleBasketVisibility}>
          <i className='white material-icons'>close</i>
        </div>
        <li className='collection-item active'>Basket</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <li className='collection-item'>Nothing here</li>
        )}
        <li className='collection-item active'>
          Sum price: {totalPrice}$ <button className='right btn'>Place</button>
        </li>
      </ul>
    </>
  );
}
