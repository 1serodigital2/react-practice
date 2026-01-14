import { useDispatch } from "react-redux";
import { cartAction } from "../../store";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const handleCartQuantity = (method = "") => {
    if (method === "increase") {
      dispatch(
        cartAction.addItem({
          id,
          title,
          quantity,
          price,
        })
      );
      console.log("title", title);
    } else {
      dispatch(cartAction.removeItem({ id }));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleCartQuantity}>-</button>
          <button onClick={() => handleCartQuantity("increase")}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
