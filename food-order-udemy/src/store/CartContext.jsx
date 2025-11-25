import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // console.log("state", state);
    // console.log("action", action);

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

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updateCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItem] = updateCartItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "ADD_ITEM", id });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log("cartContext", cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export { CartContextProvider };
export default CartContext;
