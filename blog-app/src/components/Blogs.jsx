import Header from "./Header"
import BlogForm from "./BlogForm"

export default function Blogs({ categoriesList, addNewBlog }) {

  return (
    <div className="p-8 w-full">
      <Header title="Blogs" buttonLabel="Add Blog" />
      <BlogForm categoriesList={categoriesList} addNewBlog={addNewBlog} />
    </div>
  )
}