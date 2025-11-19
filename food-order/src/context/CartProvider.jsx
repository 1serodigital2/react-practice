import { useState } from "react";

import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState({});

  const handleAddToCart = (name, price, productId, qty = 1) => {
    setCartProducts((prev) => ({
      ...prev,
      [productId]: { name, price, productId, qty },
    }));
  };

  const handleCartQtyChange = (method, prdId) => {
    setCartProducts((prevCartProduct) => {
      let product = prevCartProduct[prdId];

      if (!product) return;
      let newQty = product.qty;

      if (method === "add") {
        newQty += 1;
      } else if (method === "remove" && newQty > 1) {
        newQty -= 1;
      }

      return {
        ...prevCartProduct,
        [prdId]: { ...product, qty: newQty },
      };
    });
  };

  const emptyCart = () => {
    setCartProducts({});
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        handleAddToCart,
        setCartProducts,
        handleCartQtyChange,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
