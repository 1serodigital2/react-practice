import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

const Products = ({ addToCart }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals", {
          method: "GET",
        });
        if (!response.ok) {
          console.log("failed to fetch meals");
        }
        const mealsData = await response.json();
        setMeals(mealsData);

        console.log("featched meals", mealsData);
      } catch (error) {
        console.log("error fetching meals", error);
      }
      console.log("fetched meals 1", meals[0]);
    }

    getMeals();
  }, []);

  return (
    <div id="meals">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <ProductCard key={meal.id} {...meal} addToCart={addToCart} />
        ))
      ) : (
        <p>Loading meals...</p>
      )}
    </div>
  );
};

export default Products;
