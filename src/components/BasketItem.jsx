import React from 'react'

export default function BasketItem(props) {
  const {
    id,
    name,
    heal,
    quantity,
    removeFromCart = Function.prototype,
    addQuantity = Function.prototype,
    removeQuantity = Function.prototype
  } = props;
  return (
    <li className="collection-item collection-item_flexed">{name} x {quantity} = {heal * quantity}$
      <span className="secondary-content quantity-btns">
        <i className="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={() => { removeQuantity(id) }}>remove</i>
        <i className="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={() => { addQuantity(id) }}>add</i>
      </span>
      <span className="secondary-content">
        <i className="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={() => { removeFromCart(id) }}>delete_forever</i>
      </span>
    </li>
  )
}
