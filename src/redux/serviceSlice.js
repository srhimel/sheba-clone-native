const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { default: axios } = require('axios')

const initialState = {
  loading: false,
  data: [],
  error: ''
}

export const fetchService = createAsyncThunk('service/fetch', async () => {
  return await axios.get('https://jsonkeeper.com/b/9ELG')
    .then(res => res.data)
})
const serviceSlice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchService.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchService.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(fetchService.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  }
})

export default serviceSlice.reducer