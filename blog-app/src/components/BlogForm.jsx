import Button from "./Button"

export default function BlogForm({ categoriesList, addNewBlog }) {
  function handleBlogForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const enteredTitle = formData.get("title");
    const enteredDescription = formData.get("description");
    const enteredCategory = categoriesList.length > 0 ? formData.get("category") : undefined;

    const newBlogData = {
      blogTitle: enteredTitle,
      blogDescription: enteredDescription,
      blogCategory: enteredCategory
    }

    addNewBlog(newBlogData);
    form.reset();
  }

  const inputClasses = "w-full bg-stone-200 outline-0 px-3 py-2";

  return (
    <form action="" onSubmit={handleBlogForm} className="w-[30rem] mb-8">
      <div className="mb-3">
        <label htmlFor="">Title</label>
        <input type="text" name="title" className={inputClasses} />
      </div>
      <div className="mb-3">
        <label htmlFor="">Description</label>
        <textarea name="description" id="" className={inputClasses}></textarea>
      </div>
      {categoriesList.length > 0 && (
        <div className="mb-3">
          <label htmlFor="">Select Category</label>
          <select name="category" id="" className={inputClasses}>
            <option value="">--Select Category--</option>
            {categoriesList.map((category, index) => {
              return (
                <option key={index} value={category.categoryId}>{category.categoryName}</option>
              )
            })}
          </select>
        </div>
      )}

      <Button>Submit </ Button>
    </form>
  )
}