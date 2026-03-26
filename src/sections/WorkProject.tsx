import { FC } from "react";
import Carousel from "../components/Carousel";
import { Project } from "./WorkExperienceSection";

type WorkProjectProps = {
  project: Project;
};

const WorkProject: FC<WorkProjectProps> = ({ project }) => {
  const { images, name, type, technologies, description } = project;

  return (
    <article className="work-project">
      <div className="work-project__layout columns is-variable is-5 is-vcentered">
        <div className="column is-12-mobile is-7-tablet">
          <div className="work-project__media">
            <Carousel imagesSrc={images} />
          </div>
        </div>

        <div className="column is-12-mobile is-5-tablet">
          <div className="work-project__body">
            <p className="work-project__eyebrow">{type}</p>
            <h1 className="work-project__title title is-size-4 mb-3">{name}</h1>

            <div className="work-project__stack technology-list">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="work-project__tag technology-chip"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="work-project__description text">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkProject;
