import { createContext, useState } from "react";

export const CategoryContext = createContext({
  categoryList: [],
  addCategory: () => {},
  deleteCategory: () => {},
});

export default function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  function handleAddCategory(newCategory) {
    const catId = Math.random().toFixed(2);
    const newCat = {
      categoryName: newCategory,
      categoryId: catId,
    };
    setCategories((prevState) => {
      return [newCat, ...prevState];
    });
  }

  function handleDeleteCategory(id) {
    setCategories((prevState) => {
      return prevState.filter((oldCat) => oldCat.categoryId !== id);
    });
  }

  console.log("categories", categories);

  const catCtxt = {
    categoryList: categories,
    addCategory: handleAddCategory,
    deleteCategory: handleDeleteCategory,
  };

  return (
    <CategoryContext.Provider value={catCtxt}>
      {children}
    </CategoryContext.Provider>
  );
}
