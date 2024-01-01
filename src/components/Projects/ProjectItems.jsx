import data from "../../assets/data.json";

const ProjectItem = () => {
  return (
    <>
      {data?.projects?.map((project, index) => (
        <div className="project-item" key={index}>
          <div className="project-item-image">
            <img className="img" src={project.image} alt="project" />
          </div>
          <div className="project-item-content">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
          <div className="project-links">
            <div>
              <a href={project.github} target="_blank">
                View in Github
              </a>
            </div>
            <div>
              {project.link && (
                <a href={project.link} target="_blank">
                  View Website
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
