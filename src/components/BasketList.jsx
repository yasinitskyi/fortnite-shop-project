import React from 'react'
import BasketItem from './BasketItem';

export default function BasketList(props) {
  const { order = [], handleBasketVisibility = Function.prototype, removeFromCart = Function.prototype } = props;
  const totalPrice = order.reduce((price, el) => {
    return price + el.heal * el.quantity;
  }, 0);
  return (
    <ul className="collection collection_overlayed">
      <div className="close-icon" onClick={handleBasketVisibility}><i class="white material-icons">close</i></div>
      <li className="collection-item active">Basket</li>
      {order.length ? order.map(item => (<BasketItem key={item.id} {...item} removeFromCart={removeFromCart}/>)) : <li className="collection-item">Nothing here</li>}
      <li className="collection-item active">Sum price: { totalPrice }$</li>
    </ul>
  )
}
