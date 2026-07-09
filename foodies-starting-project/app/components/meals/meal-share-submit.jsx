"use client";

import { useFormStatus } from "react-dom";

const MealShareSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
};
export default MealShareSubmit;
