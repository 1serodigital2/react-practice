import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    console.log("state", state);
    console.log("action", action);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // console.log("existingCartItemIndex", existingCartItemIndex);

    const updateItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      console.log("existing items", existingItem);

      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const updatedItems = [...state.items];

    const existingCartItem = state.items[existingCartItemIndex];
    console.log("existing item", existingCartItem);

    if (existingCartItem.quantity === 1) {
      console.log("existing item is 1");

      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      console.log("existing item is not 1");
      const updateCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updateCartItem;
    }

    console.log("updatedItems", updatedItems);

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    console.log("addItem", item);

    dispatchCartAction({ type: "ADD_ITEM", item });
  };
  const removeItem = (id) => {
    console.log("removeItem ", id);
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  // console.log("cartContext", cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export { CartContextProvider };
export default CartContext;
