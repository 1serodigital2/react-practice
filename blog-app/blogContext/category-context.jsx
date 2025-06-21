import { createContext, useReducer } from "react";

export const CategoryContext = createContext({
  categoryList: [],
  addCategory: () => {},
  deleteCategory: () => {},
});

const initialState = { categoryList: [] };
function catReducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        categoryList: [action.payload, ...state.categoryList],
      };
    case "DELETE_CATEGORY":
      return {
        categoryList: state.categoryList.filter(
          (category) => category.categoryId !== action.payload
        ),
      };
    default:
      break;
  }
}

export default function CategoryContextProvider({ children }) {
  const [categoryState, categoryStateDispatch] = useReducer(
    catReducer,
    initialState
  );

  function handleAddCategory(newCategory) {
    categoryStateDispatch({
      type: "ADD_CATEGORY",
      payload: {
        categoryName: newCategory,
        categoryId: Math.random().toFixed(2),
      },
    });
  }

  function handleDeleteCategory(id) {
    categoryStateDispatch({
      type: "DELETE_CATEGORY",
      payload: id,
    });
  }

  const catCtxt = {
    categoryList: categoryState.categoryList,
    addCategory: handleAddCategory,
    deleteCategory: handleDeleteCategory,
  };

  return (
    <CategoryContext.Provider value={catCtxt}>
      {children}
    </CategoryContext.Provider>
  );
}
