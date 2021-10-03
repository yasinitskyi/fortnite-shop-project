import React from 'react'

export default function Cart(props) {
  const {quantity = 0, handleBasketVisibility = Function.prototype} = props;

  return (
    <div className="cart red lighten-1 white-text" onClick={handleBasketVisibility}>
      <i className="small material-icons">shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
