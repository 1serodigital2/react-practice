import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0) </Button>
        {/* <button>Cart (0)</button> */}
      </nav>
    </header>
  );
};

export default Header;
