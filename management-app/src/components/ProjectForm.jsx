export default function ProjectForm({handleFormData}){
  return (
    <form action="" className="w-full p-16" onSubmit={handleFormData}>
      <div className="flex justify-end gap-4">
        <button type="reset">Cancel</button>
        <button type="submit" className="bg-slate-900 text-white px-3 py-2 rounded-lg">Save</button>
      </div>
      <div className="mb-3">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" className="w-full bg-slate-200 h-9 px-3" />
      </div>
      <div className="mb-3">
        <label htmlFor="title">Description</label>
        <textarea name="description" id=""  className="w-full bg-slate-200 h-14 px-3"></textarea>
      </div>
      <div>
        <label htmlFor="title">Due date</label>
        <input type="date" name="date"  className="w-full bg-slate-200 h-9 px-3" />
      </div>
    </form>
  )
}