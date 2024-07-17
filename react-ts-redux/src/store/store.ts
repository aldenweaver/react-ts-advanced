import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice.ts";

// Creates a Redux store with an object telling Redux how the store should be set up
// Object will be reducer, Redux infers type of data it needs to manage from data returned by reducer
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

// Get the shape and type of the state managed by the store
export type RootState = ReturnType<typeof store.getState>; 

// Type with more information about what types can be dispatched
export type AppDispatch = typeof store.dispatch;