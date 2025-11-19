import { useState } from "react";
import useCart from "./hooks/useCart";

import Modal from "./Modal";

const Header = ({ handleCartItems }) => {
  const { cartProducts: cartItems } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartModal = (value) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src="/logo.jpg" alt="" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button" onClick={handleCartModal}>
          Cart {!cartItems && 3} {cartItems && Object.keys(cartItems).length}
        </button>
      </div>
      {isModalOpen && (
        <Modal
          handleModal={handleCartModal}
          cartItems={cartItems}
          // handleCartItems={handleCartItems}
        />
      )}
    </>
  );
};

export default Header;
