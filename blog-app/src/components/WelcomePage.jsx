export default function WelcomePage({ onPageChange }) {
  return (
    <div className="flex justify-center gap-10 pt-10 pl-10">
      <div><button className="bg-amber-800 px-8 py-4 rounded-lg text-white cursor-pointer hover:bg-amber-900" onClick={() => onPageChange("categories")}>View Categories</button></div>
      <div><button className="bg-amber-800 px-8 py-4 rounded-lg text-white cursor-pointer hover:bg-amber-900" onClick={() => onPageChange("blogs")}>View Blogs</button></div>
    </div>
  )
}