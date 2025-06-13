export default function Header({ title, buttonLabel, ...props }) {
  return (
    <div className="flex justify-between mb-8">
      <h2 className="text-4xl font-bold">{title}</h2>
      <button className="bg-slate-800 text-white rounded-md px-5 py-2 cursor-pointer hover:bg-slate-900" {...props}>{buttonLabel}</button>
    </div>
  )
}