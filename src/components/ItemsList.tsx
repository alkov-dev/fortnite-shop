import React, { FC } from 'react'
import { ICartItem, IItem } from '../types'
import Item from './Item'

interface ItemsListProps {
  items: IItem[];
  addToCart: (item: ICartItem) => void;
}

const ItemsList: FC<ItemsListProps>= ({items, addToCart}) => {
  return (
    <div className='container item-list'>
      {
        items.map(item => {
          return <Item addToCart={addToCart} key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default ItemsList
