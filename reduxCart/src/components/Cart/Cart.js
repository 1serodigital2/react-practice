import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items", cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>Please add items in your cart</p>}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.price * item.quantity,
                price: item.price,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
