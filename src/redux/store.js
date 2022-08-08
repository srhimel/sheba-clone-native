import { configureStore } from '@reduxjs/toolkit'
import ServiceReducer from './serviceSlice'
import ProductReducer from './ProductSlice'

const store = configureStore({
  reducer: {
    service: ServiceReducer,
    product: ProductReducer
  }
})

export default store