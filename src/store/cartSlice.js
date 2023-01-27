import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state,action){
            const newItem = action.payload

            //chek items alredy exist
             const existItems = state.itemsList.find((item) => item.id === newItem.id)

             if (existItems) {
                existItems.quantity++
                existItems.totalPrice += newItem.price
             } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.cover,
                })
                state.totalQuantity++

            }
        },  
        removeFromCart(state, action){
            const id = action.payload
            const exitstingItem = state.itemsList.find((item) => item.id === id)
            if (exitstingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)
                state.totalQuantity--
            } else {
                exitstingItem.quantity--
                exitstingItem.totalPrice -= exitstingItem.price
            }
        },
        removeAllCart(state,action){
            const id = action.payload
            state.itemsList = state.itemsList.filter((item) => item.id !== id)
        }
    
    },
})

export const cartActions = cartSlice.actions
export default cartSlice