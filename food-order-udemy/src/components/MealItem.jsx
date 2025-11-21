import { currencyFormatter } from "../utils/currencyFormatter";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-action">
          <Button>Add to cart</Button>
          {/* <button>Add to cart</button> */}
        </div>
      </article>
    </li>
  );
};

export default MealItem;
