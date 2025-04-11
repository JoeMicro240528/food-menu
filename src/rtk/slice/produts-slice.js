import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts',async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = await response.data
    console.log(data);
    
    
    return data
  }
)

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState :[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const {} = productsSlice.actions

export default productsSlice.reducer