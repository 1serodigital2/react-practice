import {useState} from 'react';

export default function ProjectData({individualProjectData}){
  const {projectName, projectDesc, projectDate} = individualProjectData;
  const [projectTsk, setProjectTask] = useState([]);


  function handleTaskSubmit(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);

    const task = formData.get('task');
    if(task !== ""){
      setProjectTask((prevTask) => {
        return [...prevTask, task];
      })
      console.log("task", projectTsk);
      e.target.reset();
    }
  }

  function deleteTask(index){
    console.log("index", index);
    console.log("project task", projectTsk);
    setProjectTask((projectTsk) => {
      projectTsk.splice(projectTsk[index], 1); // Removes 1 element at index 2
      return [...projectTsk];
      
    });
  }

  return (
    <div className="mx-auto w-full max-w-4xl mt-20">
      <div className="flex justify-between">
        <h2 className="text-5xl font-semibold mb-10">{projectName}</h2>
        <button>Delete</button>
      </div>
      <div className="mb-5">{projectDate}</div>
      <p className="mb-5">{projectDesc}</p>
      <hr />
      <h3 className="text-4xl font-semibold my-4">Tasks</h3>
      <form action="" className="mb-4" onSubmit={handleTaskSubmit}>
        <input type="text" name="task" placeholder="Add task here" className="bg-slate-300 h-14 px-6 rounded-lg mr-5 w-80" />
        <button>Add Task</button>
      </form>
      {projectTsk <=0 && <p>This project does not have any task</p>}
      {projectTsk &&  <ul>
        {projectTsk.map((ptask, index) => {
          return (
            <li key={index} className="flex justify-between bg-slate-200 mb-2 p-4 rounded-md"><span>{ptask}</span> <button className='text-red-500' onClick={() => deleteTask(index)}>Delete</button></li>
          )
        })}
      </ul>}
     
       
    </div>
  )
}