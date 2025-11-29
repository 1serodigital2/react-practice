import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { useContext } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";
import UserProgressContext from "../store/UserProgressContext";
import CartItems from "./CartItems";

const Cart = ({ open }) => {
  const cartCtxt = useContext(CartContext);

  const totalPrice = cartCtxt.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  // const totalPrice = () => {

  // }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your cart</h2>
      <ul>
        {cartCtxt.items.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            qty={item.quantity}
            price={currencyFormatter.format(item.price)}
            id={item.id}
            increaseItem={() => cartCtxt.addItem(item)}
            decreaseItem={() => cartCtxt.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={() => userProgressCtx.hideCart()}>
          Close
        </Button>
        {cartCtxt.items.length > 0 && <Button>Go to checkout</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
