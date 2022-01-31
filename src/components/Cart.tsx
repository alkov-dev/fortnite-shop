import React, { FC } from 'react'
import cartIcon from './cart.png'

interface CartProps {
  totalCount: number;
  totalPrice: number;
  handleCartShow: () => void;
}

const Cart :FC<CartProps> = ({totalPrice, totalCount, handleCartShow,}) => {
  return (
    <div onClick={handleCartShow} className='cart'>
      <img src={cartIcon} alt="" />
      <span>{totalPrice} V </span>|
      <span> {totalCount}</span>
    </div>
  )
}

export default Cart
