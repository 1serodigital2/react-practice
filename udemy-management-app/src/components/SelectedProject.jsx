import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onDeleteTask, onAddTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    date: "numeric",
  });
  // console.log("project", project);

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}
