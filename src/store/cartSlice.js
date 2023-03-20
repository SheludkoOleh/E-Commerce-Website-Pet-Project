import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, name, cover, price } = payload
      const existingIndex = state.itemsList.findIndex((item) => item.id === id)

      if (existingIndex >= 0) {
        state.itemsList[existingIndex].quantity++
        state.itemsList[existingIndex].totalPrice += price
      } else {
        state.itemsList.push({
          id,
          name,
          cover,
          price,
          quantity: 1,
          totalPrice: price,
        })
        state.totalQuantity++
      }
    },
    removeFromCart: (state, { payload }) => {
      const existingIndex = state.itemsList.findIndex((item) => item.id === payload)

      if (existingIndex >= 0) {
        if (state.itemsList[existingIndex].quantity === 1) {
          state.itemsList.splice(existingIndex, 1)
          state.totalQuantity--
        } else {
          state.itemsList[existingIndex].quantity--
          state.itemsList[existingIndex].totalPrice -= state.itemsList[existingIndex].price
        }
      }
    },
    removeAllCart: (state, { payload }) => {
      state.itemsList = state.itemsList.filter((item) => item.id !== payload)
      state.totalQuantity = state.itemsList.reduce((acc, item) => acc + item.quantity, 0)
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
