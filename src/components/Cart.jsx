import React from 'react'

export default function Cart(props) {
  const {quantity = 0} = props;

  return (
    <div className="cart red lighten-1 white-text">
      <i className="small material-icons">shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
