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
          className="project-card__media image is-4by3"
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
          <div className="project-card__overlay has-background-dark" />

          <div className="project-card__links is-flex is-justify-content-center is-gap-2 mt-4">
            {[urlCode, urlDemo].map((link) => (
              <a
                key={link}
                className="project-card__button button is-rounded is-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i
                    className={
                      link === urlCode
                        ? "fab fa-github"
                        : "fas fa-arrow-up-right-from-square"
                    }
                  ></i>
                </span>
                <span>{link === urlCode ? "Code" : "Live"}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="project-card__body">
          <p className="project-card__eyebrow">{styles}</p>
          <h1 className="project-card__title title is-size-5 is-size-4-widescreen mb-3">
            {name}
          </h1>
          <p className="project-card__description text is-size-6 mb-4">
            {text}
          </p>
          <div className="project-card__stack technology-list">
            {languages.map((language) => (
              <span key={language} className="technology-chip">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
