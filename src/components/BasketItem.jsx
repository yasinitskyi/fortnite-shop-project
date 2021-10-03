import React from 'react'

export default function BasketItem(props) {
  const { id, name, heal, quantity, removeFromCart = Function.prototype } = props;
  return (
    <li className="collection-item">{name} x {quantity} = {heal*quantity}$
      <span class="secondary-content">
        <i class="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={() => { removeFromCart(id) }}>delete_forever</i>
      </span>
    </li>
  )
}
