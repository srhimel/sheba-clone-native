import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: [],
  error: null
}

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
  const response = await fetch('http://103.28.121.57/api/products')
  return response.json()
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  }
})

export default productSlice.reducer