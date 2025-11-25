import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext, useReducer } from "react";

const Header = () => {
  const cartCtxt = useContext(CartContext);
  const totalItems = cartCtxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItems}) </Button>
        {/* <button>Cart (0)</button> */}
      </nav>
    </header>
  );
};

export default Header;
