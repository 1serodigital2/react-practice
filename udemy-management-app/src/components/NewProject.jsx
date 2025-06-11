import Input from "./Input"

export default function NewProject(){
  return (
    <div className="w-[35rem] mt-16">
    <menu className="flex justify-end items-center my-4 gap-4">
       <li><button className="text-stone-800  hover:text-stone-950">Cancel</button></li>
       <li><button className="bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md text-stone-50">Save</button></li>
    </menu>
    <div>
      <Input label="Title" />
      <Input label="Description" textarea />
      <Input label="Due date" />
    </div>
    </div>
  )
}