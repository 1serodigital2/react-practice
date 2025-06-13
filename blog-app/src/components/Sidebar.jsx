export default function Sidebar({ onPageChange }) {
  const sidebarLinkClasses = "text-stone-200 hover:bg-stone-800 px-4 py-3 w-full text-start cursor-pointer";

  return (
    <aside className="w-[25rem] bg-stone-900 h-screen p-8">
      <h2 className="text-3xl text-stone-400 font-bold mb-8">Blog App</h2>
      <ul>
        <li><button className={sidebarLinkClasses} onClick={() => onPageChange("home")}>Dashboard</button></li>
        <li><button className={sidebarLinkClasses} onClick={() => onPageChange("categories")}>Categories</button></li>
        <li><button className={sidebarLinkClasses} onClick={() => onPageChange("blogs")}>Blogs</button></li>
      </ul>
    </aside>
  )
}