import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartInitialState = {
  showCart: false,
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    handleShowCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const newItem = action.payload;
      console.log("action", newItem);

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
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
    },
    removeItem(state, action) {
      const productId = action.payload.id;
      console.log("state", state.cartItems);

      const product = state.cartItems.find((item) => item.id === productId);

      if (product.quantity > 1) {
        product.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartAction = cartSlice.actions;
export default store;
