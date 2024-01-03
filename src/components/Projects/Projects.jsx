import { useTranslation } from "react-i18next";
import ProjectItems from "./ProjectItems";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="projects" id="projects">
      <div className="projects-wrap">
        <h1>{t("projects")}</h1>
        <div className="project-items">
          <ProjectItems />
        </div>
      </div>
    </div>
  );
};

export default Projects;
