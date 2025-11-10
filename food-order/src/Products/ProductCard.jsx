const ProductCard = ({ id, name, price, description, image, addToCart }) => {
  const productImg = "http://localhost:3000/" + image;
  return (
    <div className="meal-item">
      <img src={productImg} alt="" />
      <h3>{name}</h3>
      <div className="meal-item-price">${price}</div>
      <p className="meal-item-description">{description}</p>
      <button
        className="button meal-item-actions"
        onClick={() => addToCart(name, price, id)}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
