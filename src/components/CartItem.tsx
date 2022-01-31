import React, { FC } from 'react'
import { ICartItem } from '../types'

interface CartItemProps {
  orderItem: ICartItem;
  removeCatItem: (id: string) => void;
}

const CartItem: FC<CartItemProps> = ({orderItem, removeCatItem}) => {
  console.log(orderItem);
  const {quantity, id, name, price} = orderItem
  const priceItem = quantity * price
  return (
    <div className='cart-item' id={id}>
      <div>
      <span>{name} : </span>
      <span>{price} - </span>
      <span>x{quantity} = </span>
      <span>{priceItem}</span>
      </div>
      <button onClick={() => removeCatItem(id)}>x</button>
    </div>
  )
}


export default CartItem
