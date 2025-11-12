import { useState } from "react";

import CartModalContent from "./CartModalContent";

const Modal = ({ handleModal, cartItems, handleCartItems }) => {
  const totalPrice = Object.values(cartItems).reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  const handleQtyChange = (method, productId) => {
    handleCartItems((prev) => {
      console.log(prev);
      let product = prev[productId];

      if (!product) return prev;

      let newQty = product.qty;

      if (method === "add") {
        newQty += 1;
      } else if (method === "remove" && newQty > 1) {
        newQty -= 1;
      }

      return {
        ...prev,
        [productId]: { ...product, qty: newQty },
      };
    });
  };

  return (
    <div className="modal">
      <CartModalContent
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleQtyChange={handleQtyChange}
        handleModal={handleModal}
      />
    </div>
  );
};

export default Modal;
