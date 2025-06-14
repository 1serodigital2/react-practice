import { useState } from "react"
import Header from "./Header";
import CategoryForm from "./CategoryForm"
import Table from "./Table";
import NoData from "./NoData";

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
      <Header title="Categories" buttonLabel="Add Category" onClick={handleAddCategory} />
      {addCategory && <CategoryForm onAdd={onAddCategory} onClose={handleCloseForm} />}
      {categoriesList.length === 0 && <NoData> Please enter some category</NoData>}

      {categoriesList.length > 0 && (
        <Table className="w-full border-collapse border border-gray-300">
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
                <tr key={index}>
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
        </Table>
      )}
    </div>
  )
}