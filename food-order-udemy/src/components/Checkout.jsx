import { useContext, useDeferredValue } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import Input from "./Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((totalItemPrice, item) => {
    return totalItemPrice + item.quantity * item.price;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  const handleCheckoutClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCheckoutClose}
    >
      <form>
        <h2>Checkout</h2>
        <div>Total Price: {currencyFormatter.format(totalPrice)}</div>
        <Input type="text" label="Full Name" id="full-name" />
        <Input type="text" label="Email Address" id="email" />
        <Input type="text" label="Street" id="street" />
        <div className="control-row">
          <Input type="text" label="Postal Code" id="post-code" />
          <Input type="text" label="City" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textonly onClick={handleCheckoutClose}>
            Close
          </Button>
          <Button textonly>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
