import { useState } from "react";

import Header from "./Header";
import Products from "./Products/Products";

import CartProvider from "./context/CartProvider";

function App() {
  // const [cartProducts, setCartProducts] = useState({});

  // const handleAddToCart = (name, price, productId, qty = 1) => {
  //   setCartProducts((prev) => ({
  //     ...prev,
  //     [productId]: { name, price, productId, qty },
  //   }));

  //   console.log("cart products ", cartProducts);
  // };
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
