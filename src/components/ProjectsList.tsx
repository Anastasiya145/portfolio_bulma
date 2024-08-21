import { FC, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import img_2048_game from "../assets/images/2048_game.png";
import img_todos_app from "../assets/images/Todos_app.png";
import img_apple_store from "../assets/images/Apple_store.png";
import img_creative_bakery from "../assets/images/Creative_Bakery.png";
import img_dia from "../assets/images/DIA.png";
import img_dashboard from "../assets/images/Dashboard.png";

type ProjectType =
  | "Pure JS"
  | "React.js"
  | "Vue.js"
  | "TypeScript"
  | "Node.js"
  | "Landing page"
  | "All";

export type ProjectData = {
  name: string;
  text: string;
  img: string;
  type: ProjectType[];
  urlCode: string;
  urlDemo: string;
};

// добавить рабочие проекты на вью и рабочие проекты на реакте
const data: ProjectData[] = [
  {
    name: "Auth App",
    text: "the full-stack application with user authorization and activation with working API",
    img: "https://bulma.io/assets/assets/images/placeholders/1280x960.png",
    type: ["React.js", "Node.js", "TypeScript"],
    urlCode: "https://github.com/Anastasiya145/node_auth-app_server",
    urlDemo: "https://github.com/Anastasiya145/node_auth-app_server",
  },
  {
    name: "Apple store",
    text: "an online store with various features for users such as exploring products, adding it to cart or favorites, items searching/sorting, viewing detailed information about each product.",
    img: img_apple_store,
    type: ["React.js", "TypeScript"],
    urlCode: "https://github.com/Anastasiya145/react_apple-store",
    urlDemo: "https://anastasiya145.github.io/react_apple-store/",
  },
  {
    name: "Todos App",
    text: "an interactive application for task recording",
    img: img_todos_app,
    type: ["React.js", "TypeScript"],
    urlCode: "https://github.com/Anastasiya145/to-do_react_app",
    urlDemo: "https://anastasiya145.github.io/to-do_react_app/",
  },
  {
    name: "2048 game",
    text: "the desktop version of the famous game",
    img: img_2048_game,
    type: ["Pure JS"],
    urlCode: "https://github.com/Anastasiya145/2048_game",
    urlDemo: "https://anastasiya145.github.io/2048_game/",
  },
  {
    name: "DIA",
    text: "the modern landing page with the dynamic Swipper slider",
    img: img_dia,
    type: ["Landing page", "Pure JS"],
    urlCode: "https://github.com/Anastasiya145/dia_landing",
    urlDemo: "https://anastasiya145.github.io/dia_landing/",
  },
  {
    name: "Creative Bakery",
    text: "the landing page. The design is pixel-perfect copie from Figma layout",
    img: img_creative_bakery,
    type: ["Landing page"],
    urlCode: "https://github.com/Anastasiya145/Creative-Bakery",
    urlDemo: "https://anastasiya145.github.io/Creative-Bakery/",
  },
  {
    name: "Dashboard",
    text: "the pixel-perfect page with responsive table and navbar",
    img: img_dashboard,
    type: ["Landing page"],
    urlCode: "https://github.com/Anastasiya145/Dashboard",
    urlDemo: "https://anastasiya145.github.io/Dashboard/",
  },
];

const projectTypesList: ProjectType[] = [
  "React.js",
  "TypeScript",
  "Vue.js",
  "Node.js",
  "Landing page",
  "Pure JS",
  "All",
];

const ProjectsList: FC = () => {
  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectType>("All");
  const [projectList, setProjectList] = useState<ProjectData[]>(data);

  useEffect(() => {
    const filteredList = data.filter((project) =>
      selectedProjectType === "All"
        ? true
        : project.type.includes(selectedProjectType)
    );

    console.log("filteredList", filteredList);

    setProjectList(filteredList);
  }, [selectedProjectType]);

  return (
    <div className="project-grid">
      <div className="tags are-light are-medium is-centered">
        {projectTypesList.map((projectType) => (
          <button
            key={projectType}
            className="tag"
            // className={classnames("tag", {
            //   isActive: projectType === selectedProjectType,
            // })}
            onClick={() => setSelectedProjectType(projectType)}
          >
            {projectType}
          </button>
        ))}
      </div>

      <div className="columns is-multiline is-mobile">
        {/* <div className="text">Showing all projects. Use filter to list them by tecknology.</div> */}
        {projectList.length > 0 &&
          projectList.map((project, index) => (
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
              <ProjectCard key={`${project.name}_${index}`} project={project} />
            </div>
          ))}

        {projectList.length === 0 && <h1>No project found</h1>}
      </div>
    </div>
  );
};

export default ProjectsList;
