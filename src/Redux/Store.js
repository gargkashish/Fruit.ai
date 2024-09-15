import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";
import CartUiReducer from "./Slices/CartUiSlice";

// create redux store
const store = configureStore({
  reducer: {
    cart: CartReducer,
    cartUi: CartUiReducer,
  },
});

export default store;
