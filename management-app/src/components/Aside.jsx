export default function Aside({handleAddProject}){
  return (
    <div className="aside bg-zinc-900 p-12 w-3/12 h-screen">
      <h3 className="text-white text-3xl font-semibold mb-5">YOUR PROJECTS</h3>
      <button className="text-slate-400 bg-zinc-600 px-4 py-2 rounded-lg mb-6" onClick={handleAddProject}>+ Add Projects</button>
      <ul>
        <li className="text-slate-400 px-4 py-2">Learning react</li>
        <li className="text-slate-400 px-4 py-2">Mastering react</li>
      </ul>
    </div>
  )
}