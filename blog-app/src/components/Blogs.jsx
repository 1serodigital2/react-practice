import { useState, useContext } from "react";
import { CategoryContext } from "../../blogContext/category-context";
import Header from "./Header";
import BlogForm from "./BlogForm";
import Table from "./Table";
import NoData from "./NoData";

export default function Blogs({ addNewBlog, blogList, handleDeleteBlog }) {
  const { categoryList } = useContext(CategoryContext);
  const [blogFormActive, setBlogFormActive] = useState(false);

  function handleBlogForm() {
    setBlogFormActive(true);
  }

  return (
    <div className="p-8 w-full">
      <Header title="Blogs" buttonLabel="Add Blog" onClick={handleBlogForm} />
      {blogFormActive && <BlogForm addNewBlog={addNewBlog} />}
      {blogList.length === 0 && <NoData>Please enter some blogs</NoData>}
      {blogList.length > 0 && (
        <Table>
          <thead className="bg-slate-400">
            <tr>
              <th className="py-4">Sl No</th>
              <th className="py-4">Blog Titel</th>
              <th className="py-4">Blog Description</th>
              <th className="py-4">Category</th>
              <th className="py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((blog, index) => {
              const category = categoryList.find(
                (category) => category.categoryId === blog.blogCategory
              );
              return (
                <tr key={index}>
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3 text-center">{blog.blogTitle}</td>
                  <td className="p-3 text-center">{blog.blogDescription}</td>
                  <td className="p-3 text-center">
                    {category ? category.categoryName : "Unknown Category"}
                  </td>
                  <td className="p-3 text-center">
                    <button className="bg-amber-500 px-4 py-2 rounded-sm cursor-pointer mr-2">
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-4 py-2 rounded-sm cursor-pointer"
                      onClick={() => handleDeleteBlog(blog.blogTitle)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
