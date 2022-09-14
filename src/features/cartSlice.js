import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cart.json";

const initialState = {
    cartItems: cartItems,
    total: 0,
    isLoading: true,
};

console.log(cartItems);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                ({item}) => item.id !== itemId
            );
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                ({item}) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                ({item}) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount - 1;
        },
        // calculateTotal: (state) =>{
        //     let total = 0 ;
        //     let amount = 0;
        //     state.cartItems.reduce(total, =>{})
        // },
        // calculateAmount: (state) =>{
        //     let amount = 0 ;
        //     state.cartItems.forEach(item =>{})
        // }
    },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
