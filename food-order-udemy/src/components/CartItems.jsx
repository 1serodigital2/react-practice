const CartItems = ({ name, qty, price, id, increaseItem, decreaseItem }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {qty} - {price}
      </p>
      <p className="cart-item-actions">
        <button onClick={decreaseItem}>-</button>
        <span>{qty}</span>
        <button onClick={increaseItem}>+</button>
      </p>
    </li>
  );
};

export default CartItems;
