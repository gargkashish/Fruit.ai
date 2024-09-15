import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
    
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItem", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItem: item,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to Cart
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set the data on localeStorage
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cartItem.map((item) => item))
      );
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
    // Remove Item
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set the data on localStorage
      setItemFunc(
        state.cartItem.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // Delete Item
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);

      if (existingItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set the data on localStorage
      setItemFunc(
        state.cartItem.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
