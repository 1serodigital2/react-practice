import {useState, useRef} from 'react';
import Aside from "./components/Aside";
import ProjectForm from './components/ProjectForm';
import NoProject from './components/NoProject'

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  
  function handleAddProject(){
    setIsAddingProject(true);
  }

  function handleFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const projectName = formData.get('title');
    const projectDesc = formData.get('description');
    const date = formData.get('date');

    const newProject = {
      'projectName': projectName,
      'projectDesc': projectDesc,
      'projectDate': date
    };
    
    setProjects((prevProjects) => {
      return [...prevProjects, newProject];
    });

    e.target.reset();
  }
  console.log("project", projects);

  return (
    <div className="flex">
      <Aside handleAddProject={handleAddProject} projectsData={projects} />
      {isAddingProject && <ProjectForm handleFormData={handleFormData}/>}
      {!isAddingProject && <NoProject handleAddProject={handleAddProject} />}
    </div>
  );
}

export default App;
