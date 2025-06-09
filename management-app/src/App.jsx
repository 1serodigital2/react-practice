import {useState} from 'react';
import Aside from "./components/Aside";
import ProjectForm from './components/ProjectForm';
import NoProject from './components/NoProject'

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  function handleAddProject(){
    setIsAddingProject(true);
  }

  return (
    <div className="flex">
      <Aside handleAddProject={handleAddProject} />
      {isAddingProject && <ProjectForm />}
      {!isAddingProject && <NoProject handleAddProject={handleAddProject} />}
    </div>
  );
}

export default App;
