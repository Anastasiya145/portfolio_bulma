import { FC } from "react";
import { ProjectData } from "./ProjectsList";
import "./project-card.scss";

type ProjectCardProps = {
  project: ProjectData;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, img, text, urlCode, urlDemo, imgPosition } = project;

  return (
    <div className="project-card card">
      <div className="project-card__container">
        <div
          className="image is-4by3"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
          }}
        >
          <img
            className="project-card__picture"
            src={img}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imgPosition ? imgPosition : "left",
            }}
          />
          <div
            className="project-card__text  is-flex is-flex-direction-column is-justify-content-center px-6"
            style={{ zIndex: 1 }}
          >
            <h1 className="title is-size-5 is-size-4-widescreen has-text-white mb-2 has-text-centered">
              {name}
            </h1>
            <p className="text is-size-6 has-text-white has-text-centered">
              {text}
            </p>
            <div className="project-card__links is-flex is-justify-content-center is-gap-2 mt-4">
              <a
                className="project-card__button button is-rounded is-link"
                href={urlCode}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i className="fas fa-laptop-code"></i>
                </span>
              </a>
              <a
                className="project-card__button button is-rounded is-link"
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
          <div className="project-card__overlay has-background-dark" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
