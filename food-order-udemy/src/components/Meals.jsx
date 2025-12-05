import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log("meals data", loadedMeals);

  // useEffect(() => {
  //   const getMeals = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/meals");
  //       if (!response.ok) {
  //         console.log("response error", response);
  //         return;
  //       }
  //       const responseData = await response.json();
  //       // console.log("response data", responseData);

  //       setLoadedMeals(responseData);
  //       return responseData;
  //     } catch (error) {
  //       console.log("fatal error", error);
  //     }
  //   };

  //   getMeals();
  // }, []);

  // console.log("meals", loadedMeals);

  if (isLoading) {
    return <p className="center">Fetching products...</p>;
  }

  if (error) {
    return <Error title="Error" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
export default Meals;
