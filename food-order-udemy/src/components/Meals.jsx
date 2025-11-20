import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          console.log("response error", response);
          return;
        }
        const responseData = await response.json();
        console.log("response data", responseData);

        setLoadedMeals(responseData);
        return responseData;
      } catch (error) {
        console.log("fatal error", error);
      }
    };

    getMeals();
  }, []);

  console.log("meals", loadedMeals);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
export default Meals;
