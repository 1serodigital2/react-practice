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
      const existingItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      const productTitle = action.payload.title;

      const product = state.cartItems.find(
        (item) => item.title === productTitle
      );

      if (product.quantity > 1) {
        product.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.title !== productTitle
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
