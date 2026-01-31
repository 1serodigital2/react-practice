import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

  const handleShowCart = () => {
    dispatch(cartAction.handleShowCart());
  };

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
