import { useState } from "react";

import Modal from "./Modal";

const Header = ({ cartItems = {} }) => {
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
        <button onClick={handleCartModal}>
          Cart {!cartItems && 3} {cartItems && Object.keys(cartItems).length}
        </button>
      </div>
      {isModalOpen && (
        <Modal handleModal={handleCartModal} cartItems={cartItems} />
      )}
    </>
  );
};

export default Header;
