import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState, 
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log("debug", projectsState);

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
      
    </main>
  );
}

export default App;
