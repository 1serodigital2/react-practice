import { createContext, useState } from "react";

export const BlogContext = createContext({
  blogList: [],
  addBlog: () => {},
  deleteBlog: () => {},
});

export default function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  function handleAddBlog(newBlogData) {
    setBlogs((prevBlog) => {
      return [newBlogData, ...prevBlog];
    });
  }

  function handleDeleteBlog(title) {
    setBlogs((prevBlog) => {
      return prevBlog.filter((blog) => blog.blogTitle !== title);
    });
  }

  const blogCtxt = {
    blogList: blogs,
    addBlog: handleAddBlog,
    deleteBlog: handleDeleteBlog,
  };

  return (
    <BlogContext.Provider value={blogCtxt}>{children}</BlogContext.Provider>
  );
}
