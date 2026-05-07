'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface WeightOption {
  weightOz: number
  price: number
}

export interface Product {
  id: number
  name: string
  price: number
  weightOptions: WeightOption[]
  shortDescription: string
  description: string
  flavorProfile: string
  nutritionalBenefits: string
  bestUses: string[]
  image: string
  featured: boolean
  category: string
}

export interface CartItem {
  product: Product
  selectedWeightOz: number
  unitPrice: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; selectedWeightOz: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number; selectedWeightOz: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; selectedWeightOz: number; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addItem: (product: Product, selectedWeightOz?: number) => void
  removeItem: (id: number, selectedWeightOz: number) => void
  updateQuantity: (id: number, selectedWeightOz: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function getDefaultWeightOption(product: Product): WeightOption {
  return product.weightOptions[0] ?? { weightOz: 1, price: product.price }
}

function getUnitPrice(product: Product, selectedWeightOz: number): number {
  return product.weightOptions.find((option) => option.weightOz === selectedWeightOz)?.price ?? product.price
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, selectedWeightOz } = action.payload
      const unitPrice = getUnitPrice(product, selectedWeightOz)
      const existingItem = state.items.find(
        item => item.product.id === product.id && item.selectedWeightOz === selectedWeightOz
      )
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id && item.selectedWeightOz === selectedWeightOz
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems)
        }
      } else {
        const updatedItems = [
          ...state.items,
          { product, selectedWeightOz, unitPrice, quantity: 1 }
        ]
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems)
        }
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => !(item.product.id === action.payload.id && item.selectedWeightOz === action.payload.selectedWeightOz)
      )
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const updatedItems = state.items.filter(
          item => !(item.product.id === action.payload.id && item.selectedWeightOz === action.payload.selectedWeightOz)
        )
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems)
        }
      }
      
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.id && item.selectedWeightOz === action.payload.selectedWeightOz
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 }
    
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  const addItem = (product: Product, selectedWeightOz?: number) => {
    const defaultWeightOption = getDefaultWeightOption(product)
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        selectedWeightOz: selectedWeightOz ?? defaultWeightOption.weightOz
      }
    })
  }

  const removeItem = (id: number, selectedWeightOz: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, selectedWeightOz } })
  }

  const updateQuantity = (id: number, selectedWeightOz: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, selectedWeightOz, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}