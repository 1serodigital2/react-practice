const Modal = ({ handleModal, cartItems }) => {
  return (
    <div className="modal">
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {Object.keys(cartItems).length > 0 &&
            Object.values(cartItems).map(({ name, price, productId }) => (
              <li className="cart-item modal-actions" key={productId}>
                <span className="text-button">
                  {name}. - 1 x ${price}
                </span>
                <span className="cart-item-actions">
                  <button className="cart-item-action">-</button>
                  <input type="text" value={1} />
                  <button className="cart-item-action">+</button>
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
