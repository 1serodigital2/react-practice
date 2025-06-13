import Button from "./Button"

export default function CategoryForm({ onClose, onAdd }) {

  function handleAddCategory() {
    const enteredCategory = document.getElementById("category").value;

    if (enteredCategory.trim() !== "") {
      onAdd(enteredCategory.trim());
    }
    document.getElementById("category").value = "";
  }

  return (
    <div className="flex my-4">
      <input type="text" placeholder="Enter category name" id="category" className="bg-slate-300  px-3 py-2 rounded-sm mr-4" />
      <div className="flex gap-3">
        <Button type="button" onClick={onClose}>Close</Button>
        <Button type="button" onClick={handleAddCategory}>Submit</Button>
      </div>
    </div>
  )
}