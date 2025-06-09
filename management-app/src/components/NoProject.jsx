export default function NoProject({handleAddProject}){
  return (
    <div className="flex  justify-center items-center flex-1 flex-col gap-5">
        <img src="logo.png" alt="" className=" w-32" />
        <h4 className="text-5xl font-semibold">No project selected</h4>
        <p className='text-2xl'>Lorem ipsum dolor sit amet.</p>
        <button className="bg-neutral-800 rounded-lg text-white px-4 py-2" onClick={handleAddProject}>Create new project</button>
      </div>
  )
}