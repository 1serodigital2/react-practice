import { useState } from "react"

import WelcomePage from "./components/WelcomePage"
import Sidebar from "./components/Sidebar"
import "./index.css"
import Categories from "./components/Categories"
import Blogs from "./components/Blogs"

function App() {
  const [activePage, setActivePage] = useState("home");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  function handleAddBlog(newBlogData) {
    setBlogs((prevBlog) => {
      return [newBlogData, ...prevBlog]
    })

  }
  console.log("blogs", blogs);

  function handleAddCategory(newCategory) {
    const catId = Math.random().toFixed(2);
    const newCat = {
      categoryName: newCategory,
      categoryId: catId
    }
    setCategories((prevState) => {
      return [newCat, ...prevState]
    })
  }

  function handleDeleteCategory(id) {
    setCategories((prevState) => {
      return prevState.filter((oldCat) => oldCat.categoryId !== id)
    })
  }

  console.log("categories", categories);

  function handleActivePage(activePage) {
    setActivePage(activePage);
  }

  let content = <WelcomePage onPageChange={handleActivePage} />

  if (activePage === "categories") {
    content = <Categories onAddCategory={handleAddCategory} categoriesList={categories} onCategoryDelete={handleDeleteCategory} />
  } else if (activePage === "blogs") {
    content = <Blogs categoriesList={categories} addNewBlog={handleAddBlog} />
  }


  return (
    <div className="flex">
      <Sidebar onPageChange={handleActivePage} />
      {content}
    </div>
  )
}

export default App
