import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  showCart: false,
  cartItems: [],
  cartChanged: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      console.log("action", action);
      state.cartItems = action.payload.cartItems || [];
    },
    handleShowCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const newItem = action.payload;
      console.log("action", newItem);
      console.log("state", state.cartItems);

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      }
      state.cartChanged = true;
    },
    removeItem(state, action) {
      const productId = action.payload.id;

      const product = state.cartItems.find((item) => item.id === productId);

      if (product.quantity > 1) {
        product.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId,
        );
      }
      state.cartChanged = true;
    },
  },
});

export default cartSlice;
