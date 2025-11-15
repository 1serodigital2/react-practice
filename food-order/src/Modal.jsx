import { useState } from "react";

import CartModalContent from "./CartModalContent";
import CheckoutForm from "./CheckoutForm";

const Modal = ({ handleModal, cartItems, handleCartItems }) => {
  const [isCheckoutFormActive, setIsCheckoutFormActive] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleGoToCheckout = (value = false) => {
    setIsCheckoutFormActive(value);
  };

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
      {Object.values(cartItems).length === 0 && !orderPlaced ? (
        <>
          <h3 className="modal-title">Please add some items to cart</h3>
          <button className="button" onClick={() => handleModal(false)}>
            Close
          </button>
        </>
      ) : !isCheckoutFormActive ? (
        <CartModalContent
          cartItems={cartItems}
          totalPrice={totalPrice}
          handleQtyChange={handleQtyChange}
          handleModal={handleModal}
          handleGoToCheckout={handleGoToCheckout}
        />
      ) : (
        <CheckoutForm
          handleGoToCheckout={handleGoToCheckout}
          cartItems={cartItems}
          totalPrice={totalPrice}
          handleModal={handleModal}
          handleCartItems={handleCartItems}
          setOrderPlaced={setOrderPlaced}
          orderPlaced={orderPlaced}
        />
      )}

      {/* {} */}
      {/* <CartModalContent
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleQtyChange={handleQtyChange}
        handleModal={handleModal}
        handleGoToCheckout={handleGoToCheckout}
      /> */}
    </div>
  );
};

export default Modal;
