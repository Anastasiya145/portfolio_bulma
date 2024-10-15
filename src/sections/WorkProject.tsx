import { FC } from "react";
import Carousel from "../components/Carousel";
import { Project } from "./WorkExperienceSection";

type WorkProjectProps = {
  project: Project;
};

const WorkProject: FC<WorkProjectProps> = ({ project }) => {
  const { images, name, type, technologies, description } = project;

  return (
    <div
      className="work-project py-5"
      style={{ borderBottom: "1px solid grey" }}
    >
      <div className="columns is-gap-2">
        <div className="column is-12-mobile is-8-tablet">
          <Carousel imagesSrc={images} />
        </div>
        <div className="column is-12-mobile is-4-tablet">
          <h1 className="title is-4">{name}</h1>
          <p className="subtitle is-6">{type}</p>
          <p className="has-text-weight-bold">Technologies:</p>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
