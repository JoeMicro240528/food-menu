import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:[],
    name: 'cartSlice',
    reducers:{
        addToCart: (state , action) => {
            const productIndex = state.findIndex((product) => product.id === action.payload.id);
            if(productIndex >= 0){
                state[productIndex].quantity += 1;
            }else{
                const tempProduct = {...action.payload, quantity: 1}
                state.push(tempProduct)
            }
        },
        removeFromCart: (state , action) => {
            const nextCart = state.filter((cartItem) => cartItem.id !== action.payload.id);
            return nextCart;
        },
        clearCart: (state , action) => {
            return state = [];
        },
    }
    })

    
    export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
    
    export default cartSlice.reducer