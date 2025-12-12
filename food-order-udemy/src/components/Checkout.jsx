import { useContext, useActionState } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import Input from "./Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const Checkout = () => {
  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const {
    sendRequest,
    // isLoading: isSending,
    error,
    data,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce((totalItemPrice, item) => {
    return totalItemPrice + item.quantity * item.price;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const checkoutAction = async (prevState, fd) => {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    });
  };

  const [formState, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button disabled={isSending}>Submit order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Submitting order request...</span>;
  }
  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Hurrah!</h2>
        <p>Your order was created successfully</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Close</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <div>Total Price: {currencyFormatter.format(totalPrice)}</div>
        <Input type="text" label="Full Name" id="name" />
        <Input type="email" label="Email Address" id="email" />
        <Input type="text" label="Street" id="street" />
        <div className="control-row">
          <Input type="text" label="Postal Code" id="postal-code" />
          <Input type="text" label="City" id="city" />
        </div>
        <p className="modal-actions">{actions}</p>
      </form>
      {error && <Error title="Failed to submit" message={error} />}
    </Modal>
  );
};

export default Checkout;
