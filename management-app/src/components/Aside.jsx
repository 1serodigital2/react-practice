export default function Aside({handleAddProject, projectsData, transferProjectData}){

  return (
    <div className="aside bg-zinc-900 p-12 w-3/12 h-screen">
      <h3 className="text-white text-3xl font-semibold mb-5">YOUR PROJECTS</h3>
      <button className="text-slate-400 bg-zinc-600 px-4 py-2 rounded-lg mb-6" onClick={handleAddProject}>+ Add Projects</button>
      <ul>
        {projectsData.map((project, index) => {
          console.log('debug', project);
          return (
            <li key={index} className="text-slate-400 px-4 py-2 cursor-pointer hover:text-slate-300 hover:bg-zinc-600 hover:rounded-md" onClick={() => transferProjectData(index)}>{project.projectName}</li>
          )
        })}
      </ul>
    </div>
  )
}