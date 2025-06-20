import { createContext, useReducer } from "react";

export const BlogContext = createContext({
  blogList: [],
  addBlog: () => {},
  deleteBlog: () => {},
});

const initialBlogState = { blogList: [] };
function blogReducer(state, action) {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        blogList: [action.payload, ...state.blogList],
      };
    case "DELETE_BLOG":
      return {
        blogList: state.blogList.filter(
          (blog) => blog.blogTitle !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default function BlogContextProvider({ children }) {
  const [blogState, blogStateDispatch] = useReducer(
    blogReducer,
    initialBlogState
  );

  function handleAddBlog(newBlogData) {
    blogStateDispatch({
      type: "ADD_BLOG",
      payload: newBlogData,
    });
  }

  function handleDeleteBlog(title) {
    blogStateDispatch({
      type: "DELETE_BLOG",
      payload: title,
    });
  }

  const blogCtxt = {
    blogList: blogState.blogList,
    addBlog: handleAddBlog,
    deleteBlog: handleDeleteBlog,
  };

  return (
    <BlogContext.Provider value={blogCtxt}>{children}</BlogContext.Provider>
  );
}
