import { useState } from "react"

import CategoryForm from "./CategoryForm"

export default function Categories({ onAddCategory, categoriesList, onCategoryDelete }) {

  const [addCategory, setAddCategory] = useState(false);

  function handleAddCategory() {
    setAddCategory(true);
  }

  function handleCloseForm() {
    setAddCategory(false);
  }

  return (
    <div className="p-8 w-full">
      <div className="flex justify-between mb-8">
        <h2 className="text-4xl font-bold">Categories</h2>
        <button className="bg-slate-800 text-white rounded-md px-5 py-2 cursor-pointer hover:bg-slate-900" onClick={handleAddCategory}>Add Categories</button>
      </div>
      {addCategory && <CategoryForm onAdd={onAddCategory} onClose={handleCloseForm} />}
      {categoriesList.length === 0 && <p className="bg-amber-500 p-2 rounded-xl">Please enter some category</p>}

      {categoriesList.length > 0 && (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-slate-400">
            <tr>
              <th className="py-4">Sl No</th>
              <th className="py-4">Category Name</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoriesList.map((category, index) => {
              return (
                <tr key={category.categoryId}>
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3 text-center">{category.categoryName}</td>
                  <td className="p-3 text-center">
                    <button className="bg-amber-500 px-4 py-2 rounded-sm cursor-pointer mr-2">Edit</button>
                    <button className="bg-red-500 px-4 py-2 rounded-sm cursor-pointer" onClick={() => onCategoryDelete(category.categoryId)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}