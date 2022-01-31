import React, { FC, useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../const'
import { ICartItem, IItem } from '../types'
import Cart from './Cart'
import CartList from './CartList'
import ItemsList from './ItemsList'

const Shop: FC = () => {
  const [items, setItems] = useState<IItem[]>([])
  const [order, setOrder] = useState<ICartItem[]>([])
  const [isCartShow, setIsCartShow] = useState<boolean>(false)


  const totalCount: number = order.reduce((quantity, el) => {
    return quantity + el.quantity
  }, 0)

  const totalPrice: number = order.reduce((sum, el) => {
    return sum + el.quantity * el.price
  }, 0)


  const addToCart = (item: ICartItem) => {
    const itemIndex = order.findIndex(orderItem => item.id === orderItem.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(itemIndex === index) {
          return {
            ...orderItem,
            quantity: ++orderItem.quantity
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }

  }

  const removeCart = () => {
    setOrder([])
  }

  const removeCatItem = (itemId : string) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
  }


  const handleCartShow = () => {
    setIsCartShow(!isCartShow)
  }

  console.log(order);


  useEffect( () => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    }).then(res => res.json())
    .then(data => setItems(data.featured))
  }, [])


  return (
    <div className='shop'>
      <ItemsList addToCart={addToCart} items={items}/>
      <Cart handleCartShow={handleCartShow} totalCount={totalCount} totalPrice={totalPrice}/>
      { isCartShow && <CartList removeCart={removeCart} removeCatItem={removeCatItem} handleCartShow={handleCartShow} totalPrice={totalPrice} order={order}/> }
    </div>
  )
}

export default Shop
