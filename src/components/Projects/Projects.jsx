import ProjectItems from "./ProjectItems";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrap">
        <h1>Projects</h1>
        <div className="project-items">
          <ProjectItems />
        </div>
      </div>
    </div>
  );
};

export default Projects;
