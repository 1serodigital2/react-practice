import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtxt = useContext(CartContext);
  const totalItems = cartCtxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const userProgressCtxt = useContext(UserProgressContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={() => userProgressCtxt.showCart("cart")}>
          Cart ({totalItems}){" "}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
