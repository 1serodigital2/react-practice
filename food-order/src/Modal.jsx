import { useState } from "react";
import useCart from "./hooks/useCart";

import CartModalContent from "./CartModalContent";
import CheckoutForm from "./CheckoutForm";

const Modal = ({ handleModal }) => {
  const { cartProducts: cartItems } = useCart();
  const [isCheckoutFormActive, setIsCheckoutFormActive] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleGoToCheckout = (value = false) => {
    setIsCheckoutFormActive(value);
  };

  const totalPrice = Object.values(cartItems).reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

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
          handleModal={handleModal}
          handleGoToCheckout={handleGoToCheckout}
          totalPrice={totalPrice}
        />
      ) : (
        <CheckoutForm
          handleGoToCheckout={handleGoToCheckout}
          totalPrice={totalPrice}
          handleModal={handleModal}
          setOrderPlaced={setOrderPlaced}
          orderPlaced={orderPlaced}
        />
      )}
    </div>
  );
};

export default Modal;
