import { createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'list',
  initialState:{
    setProducts(state, {payload}){
      return { ...state, products: payload}
    }
  }
})

export const { setProducts } = slice.actions

export default slice.reducer
