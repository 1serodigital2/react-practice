import { useEffect } from "react";

const Modal = ({ handleModal, cartItems, handleCartItems }) => {
  const handleQtyChange = (method, productId) => {
    console.log("method", method);
    console.log("productId", productId);

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

  // useEffect(() => {
  //   console.log("cartItems", cartItems);
  // }, [cartItems]);

  return (
    <div className="modal">
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {Object.keys(cartItems).length > 0 &&
            Object.values(cartItems).map(({ name, price, productId, qty }) => (
              <li className="cart-item modal-actions" key={productId}>
                <span className="text-button">
                  {name}. - 1 x ${price}
                </span>
                <span className="cart-item-actions">
                  <button
                    className="cart-item-action"
                    onClick={() => handleQtyChange("remove", productId)}
                  >
                    -
                  </button>
                  <input type="text" value={qty} readOnly />
                  <button
                    className="cart-item-action"
                    onClick={() => handleQtyChange("add", productId)}
                  >
                    +
                  </button>
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div className="modal-actions">
        <button className="text-button" onClick={() => handleModal(false)}>
          Close
        </button>
        <button className="button">Go to checkout</button>
      </div>
    </div>
  );
};

export default Modal;
