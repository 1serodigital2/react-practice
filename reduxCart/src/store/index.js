import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { uiActions } from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});
export const cartAction = cartSlice.actions;

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      }),
    );

    const sendRequest = async () => {
      console.log("sendRequest triggered");

      const response = await fetch(
        "https://redux-practice-e27cc-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fatal error",
        }),
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data",
      }),
    );

    try {
      const response = await fetch(
        "https://redux-practice-e27cc-default-rtdb.firebaseio.com/cart.json",
      );
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();
      console.log("get cart", data);

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data fetched successfully",
        }),
      );
      dispatch(
        cartAction.replaceCart({
          cartItems: data,
        }),
      );
      return data;
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        }),
      );
    }
  };
};

export default store;
