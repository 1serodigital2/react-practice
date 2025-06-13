export default function Button({ children, ...props }) {
  return (
    <button className="bg-stone-700 px-3 py-2 rounded-sm text-white cursor-pointer" {...props}>{children}</button>
  )
}