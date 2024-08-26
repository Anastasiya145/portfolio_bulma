import { FC } from "react";
import { ProjectData } from "./ProjectsList";
import "./project-card.scss";

type ProjectCardProps = {
  project: ProjectData;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, img, text, urlCode, urlDemo } = project;

  return (
    <div className="card">
      <div className="card-container">
        <div className="image is-4by3">
          <img className="project-picture" src={img} alt={name} />
          <div className="card-text px-6">
            <h1 className="title is-size-5 is-size-4-widescreen has-text-white mb-2">
              {name}
            </h1>
            <p className="text is-size-6 has-text-white">{text}</p>
            <div className="project-links is-flex is-justify-content-center is-gap-1 mt-4">
              <a
                className="button is-white is-outlined is-rounded"
                href={urlCode}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i className="fas fa-laptop-code"></i>
                </span>
              </a>
              <a
                className="button is-white is-outlined is-rounded"
                href={urlDemo}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i className="fas fa-globe"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="card-overlay has-background-dark" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
