import React, { useContext, useReducer } from 'react'
import CartContext from './CartContext'

interface Cart {
  products: string[],
  shipping_value?: number
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
  const context = useContext(CartContext)

  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch(action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto Novo']
          }
        default:
          return state
      }
    },
    {
      products: [],
      shipping_value: 0
    }
  )

  return (
    <ul>
      {context.products?.map(product => <li key={product.id}>product.name</li>)}
    </ul>
  )
}

export default AppContext
