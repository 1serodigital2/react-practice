import { useState } from "react";

import WelcomePage from "./components/WelcomePage";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Categories from "./components/Categories";
import Blogs from "./components/Blogs";

import CategoryContextProvider from "../blogContext/category-context";
import BlogContextProvider from "../blogContext/blog-context";

function App() {
  const [activePage, setActivePage] = useState("home");

  function handleActivePage(activePage) {
    setActivePage(activePage);
  }

  let content = <WelcomePage onPageChange={handleActivePage} />;

  if (activePage === "categories") {
    content = <Categories />;
  } else if (activePage === "blogs") {
    content = <Blogs />;
  }

  return (
    <CategoryContextProvider>
      <BlogContextProvider>
        <div className="flex">
          <Sidebar onPageChange={handleActivePage} />
          {content}
        </div>
      </BlogContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
