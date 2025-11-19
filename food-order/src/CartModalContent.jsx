import useCart from "./hooks/useCart";

const CartModalContent = ({
  // cartItems,
  totalPrice,
  handleQtyChange,
  handleModal,
  handleGoToCheckout,
}) => {
  const { cartProducts: cartItems, handleCartQtyChange } = useCart();

  console.log("cart_items", cartItems);
  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {Object.keys(cartItems).length > 0 &&
            Object.values(cartItems).map(({ name, price, productId, qty }) => (
              <li
                className="cart-item modal-actions"
                key={productId}
                data-testid={productId}
              >
                <span className="text-button">
                  {name}. - 1 x ${price}
                </span>
                <span className="cart-item-actions">
                  <button
                    className="cart-item-action"
                    // onClick={() => handleQtyChange("remove", productId)}
                    onClick={() => handleCartQtyChange("remove", productId)}
                  >
                    -
                  </button>
                  <input type="text" value={qty} readOnly />
                  <button
                    className="cart-item-action"
                    // onClick={() => handleQtyChange("add", productId)}
                    onClick={() => handleCartQtyChange("add", productId)}
                  >
                    +
                  </button>
                </span>
              </li>
            ))}
        </ul>
        <h3 className="meal-total-price">$ {totalPrice.toFixed(2)}</h3>
      </div>
      <div className="modal-actions">
        <button className="text-button" onClick={() => handleModal(false)}>
          Close
        </button>
        <button className="button" onClick={() => handleGoToCheckout(true)}>
          Go to checkout
        </button>
      </div>
    </>
  );
};

export default CartModalContent;
