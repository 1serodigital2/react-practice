import { useContext } from "react";
import useCart from "../hooks/useCart";

const ProductCard = ({ id, name, price, description, image }) => {
  const { handleAddToCart } = useCart();

  const productImg = "http://localhost:3000/" + image;
  return (
    <div className="meal-item">
      <img src={productImg} alt="" />
      <h3>{name}</h3>
      <div className="meal-item-price">${price}</div>
      <p className="meal-item-description">{description}</p>
      <button
        className="button meal-item-actions"
        onClick={() => handleAddToCart(name, price, id)}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
