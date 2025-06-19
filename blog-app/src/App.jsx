import { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Categories from "./components/Categories";
import Blogs from "./components/Blogs";

import CategoryContextProvider from "../blogContext/category-context";

function App() {
  const [activePage, setActivePage] = useState("home");
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
  console.log("blogs", blogs);

  function handleActivePage(activePage) {
    setActivePage(activePage);
  }

  let content = <WelcomePage onPageChange={handleActivePage} />;

  if (activePage === "categories") {
    content = (
      <CategoryContextProvider>
        <Categories />
      </CategoryContextProvider>
    );
  } else if (activePage === "blogs") {
    content = (
      <Blogs
        categoriesList={categories}
        addNewBlog={handleAddBlog}
        blogList={blogs}
        handleDeleteBlog={handleDeleteBlog}
      />
    );
  }

  return (
    <div className="flex">
      <Sidebar onPageChange={handleActivePage} />
      {content}
    </div>
  );
}

export default App;
