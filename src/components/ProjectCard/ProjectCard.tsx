import { FC } from "react";
import { ProjectData } from "../ProjectsList";
import "./project-card.scss";

type ProjectCardProps = {
  project: ProjectData;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, img, text, urlCode, urlDemo, imgPosition, styles, languages } =
    project;

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
            <div className="m-2">
              <h1 className="title is-size-5 is-size-4-widescreen has-text-white mb-2 has-text-centered">
                {name}
              </h1>
              <p className="text is-size-6 has-text-white has-text-centered">
                {text}
              </p>
            </div>

            <p className="text has-background-warning has-text-black p-2 has-text-weight-bold is-size-5">
              {[languages, styles].join(",")}
            </p>

            <div className="project-card__links is-flex is-justify-content-center is-gap-2 mt-4">
              {[urlCode, urlDemo].map((link) => (
                <a
                  className="project-card__button button is-rounded is-link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon has-text-white">
                    <i
                      className={
                        link === urlCode
                          ? "fab fa-gitlab"
                          : "fas fa-laptop-code"
                      }
                    ></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="project-card__overlay has-background-dark" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
