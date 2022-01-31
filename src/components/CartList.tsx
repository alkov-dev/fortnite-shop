import React, { FC } from 'react'
import { ICartItem } from '../types'
import CartItem from './CartItem'

interface CartListProps {
  order: ICartItem[];
  totalPrice: number;
  removeCatItem: (id : string) => void;
  removeCart: () => void;
  handleCartShow: () => void;
}

const CartList :FC<CartListProps> = ({order, totalPrice, removeCatItem, removeCart, handleCartShow}) => {
  return (
    <div className='cart-list'>
      <div className="cart-top">
        <h4>Корзина</h4>
        <button onClick={handleCartShow}>x</button>
      </div>
      { order.length ? (order.map(item => (
          <CartItem removeCatItem={removeCatItem} key={item.id} orderItem={item}/>
        ))) : <p className='cart-zero'>Корзина пусто</p>
      }
      <p className='cart-total'>Общая стоимость: {totalPrice} V</p>
      <div className='cart-remove'>
        <button onClick={removeCart}>Очистить корзину</button>
      </div>
    </div>
  )
}

export default CartList
