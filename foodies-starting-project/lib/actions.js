"use server";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

const invalidText = (text) => {
  if (!text || text.trim() === "") return true;
  return false;
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (invalidText(meal.title) || invalidText(meal.instructions)) {
    // throw new Error("Please fill up the form properly");
    return {
      message: "Invalid input",
    };
  }
  console.log("[submitShareMeal] meal", meal);
  await saveMeal(meal);
  redirect("/meals");
};
