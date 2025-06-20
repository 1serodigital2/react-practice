import { useContext } from "react";
import { CategoryContext } from "../../blogContext/category-context";
import { BlogContext } from "../../blogContext/blog-context";

import Button from "./Button";

export default function BlogForm({ closeForm }) {
  const { categoryList } = useContext(CategoryContext);
  const { addBlog } = useContext(BlogContext);
  function handleBlogForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const enteredTitle = formData.get("title");
    const enteredDescription = formData.get("description");
    const enteredCategory =
      categoryList?.length > 0 ? formData.get("category") : undefined;

    const notValidData =
      enteredTitle == "" || enteredDescription == "" || enteredCategory == "";

    if (notValidData) {
      alert("Please fill up the form properly");
      return;
    }

    const newBlogData = {
      blogTitle: enteredTitle,
      blogDescription: enteredDescription,
      blogCategory: enteredCategory,
    };

    addBlog(newBlogData);
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
      {categoryList.length > 0 && (
        <div className="mb-3">
          <label htmlFor="">Select Category</label>
          <select name="category" id="" className={inputClasses}>
            <option value="">--Select Category--</option>
            {categoryList.map((category, index) => {
              return (
                <option key={index} value={category.categoryId}>
                  {category.categoryName}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <Button
        type="button"
        style={{
          marginRight: "10px",
        }}
        onClick={closeForm}
      >
        Close
      </Button>
      <Button>Submit </Button>
    </form>
  );
}
