import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './slice/produts-slice'
import  cartSlice  from './slice/cart-slice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart:cartSlice,
  },
})