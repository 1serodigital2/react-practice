import { useState } from "react";

import Header from "./Header";
import Products from "./Products/Products";

function App() {
  const [cartProducts, setCartProducts] = useState({});

  const handleAddToCart = (name, price, productId, qty = 1) => {
    setCartProducts((prev) => ({
      ...prev,
      [productId]: { name, price, productId, qty },
    }));

    console.log("adding to cart ", productId);
    console.log("cart products ", cartProducts);
    console.log("cart num", Object.keys(cartProducts).length);
  };
  return (
    <>
      <Header cartItems={cartProducts} handleCartItems={setCartProducts} />
      <Products addToCart={handleAddToCart} />
    </>
  );
}

export default App;
