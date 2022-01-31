import React, { FC } from 'react'
import { ICartItem, IItem } from '../types'

interface ItemProps {
  item: IItem;
  addToCart: (item: ICartItem) => void
}

const Item: FC<ItemProps> = ({item, addToCart}) => {
  const {description, id, price, full_background, name} = item

  const addCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 0,
    })
  }

  return (
    <div className='item' id={id}>
      <img src={full_background} alt="" />
      <div className='item-box'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='item-price'>
          <button onClick={addCart}>Купить</button>
          <p>{price} V</p>
        </div>
      </div>
    </div>
  )
}

export default Item
