import { useState } from "react";

export default function NewTask() {
  const [newTask, setNewTask] = useState({
    projectId: null,

  })
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-900">Add Task</button>
    </div>
  )
}