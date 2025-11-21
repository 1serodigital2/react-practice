import { createContext } from "react";

const CartContext = createContext({
  item: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartContextProvider = ({ children }) => {
  return <CartContext>{children}</CartContext>;
};
export { CartContextProvider };
export default CartContext;
