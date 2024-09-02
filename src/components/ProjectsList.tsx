import { FC, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import img_2048_game from "../assets/images/2048_game.png";
import img_todos_app from "../assets/images/Todos_app.png";
import img_apple_store from "../assets/images/Apple_store.png";
import img_creative_bakery from "../assets/images/Creative_Bakery.png";
import img_dia from "../assets/images/DIA.png";
import img_dashboard from "../assets/images/Dashboard.png";
import img_authapp from "../assets/images/img_auth-app.png";
import { motion } from "framer-motion";
import TagButton from "./TagButton/TagButton";
import { useTranslation } from "react-i18next";

const projectTypesList = [
  "React/TS",
  "Vue.js",
  "Node.js",
  "Landing page",
  "Pure JS",
] as const;

export type ProjectType = (typeof projectTypesList)[number] | "All Projects";

export type ProjectData = {
  name: string;
  text: string;
  img: string;
  type: ProjectType[];
  urlCode: string;
  urlDemo: string;
  imgPosition?: "center" | "left" | "right";
};

// добавить рабочие проекты на вью и рабочие проекты на реакте
const ProjectsList: FC = () => {
  const { t } = useTranslation("portfolio");

  const data: ProjectData[] = [
    {
      name: t("projects.authApp.name"),
      text: t("projects.authApp.text"),
      img: img_authapp,
      type: ["React/TS", "Node.js"],
      urlCode: "https://github.com/Anastasiya145/react_auth-app_client",
      urlDemo: "https://anastasiya145.github.io/react_auth-app_client/",
      imgPosition: "center",
    },
    {
      name: t("projects.appleStore.name"),
      text: t("projects.appleStore.text"),
      img: img_apple_store,
      type: ["React/TS"],
      urlCode: "https://github.com/Anastasiya145/react_apple-store",
      urlDemo: "https://anastasiya145.github.io/react_apple-store/",
    },
    {
      name: t("projects.todosApp.name"),
      text: t("projects.todosApp.text"),
      img: img_todos_app,
      type: ["React/TS"],
      urlCode: "https://github.com/Anastasiya145/to-do_react_app",
      urlDemo: "https://anastasiya145.github.io/to-do_react_app/",
      imgPosition: "center",
    },
    {
      name: t("projects.game2048.name"),
      text: t("projects.game2048.text"),
      img: img_2048_game,
      type: ["Pure JS"],
      urlCode: "https://github.com/Anastasiya145/2048_game",
      urlDemo: "https://anastasiya145.github.io/2048_game/",
      imgPosition: "center",
    },
    {
      name: t("projects.dia.name"),
      text: t("projects.dia.text"),
      img: img_dia,
      type: ["Landing page", "Pure JS"],
      urlCode: "https://github.com/Anastasiya145/dia_landing",
      urlDemo: "https://anastasiya145.github.io/dia_landing/",
    },
    {
      name: t("projects.creativeBakery.name"),
      text: t("projects.creativeBakery.text"),
      img: img_creative_bakery,
      type: ["Landing page"],
      urlCode: "https://github.com/Anastasiya145/Creative-Bakery",
      urlDemo: "https://anastasiya145.github.io/Creative-Bakery/",
    },
    {
      name: t("projects.dashboard.name"),
      text: t("projects.dashboard.text"),
      img: img_dashboard,
      type: ["Landing page"],
      urlCode: "https://github.com/Anastasiya145/Dashboard",
      urlDemo: "https://anastasiya145.github.io/Dashboard/",
    },
  ];

  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectType>("All Projects");
  const [projectList, setProjectList] = useState<ProjectData[]>(data);

  useEffect(() => {
    const filteredList = data.filter((project) =>
      selectedProjectType === "All Projects"
        ? true
        : project.type.includes(selectedProjectType)
    );

    setProjectList(filteredList);
  }, [selectedProjectType]);

  return (
    <div className="project-grid">
      <div className="field is-grouped is-grouped-multiline is-justify-content-center mt-4">
        <TagButton
          isSelected={"All Projects" === selectedProjectType}
          onClick={setSelectedProjectType}
          projectType={"All Projects"}
        />
        <div
          className="custom-divider mx-4 is-align-self-center has-background-light"
          style={{
            width: "1px",
            height: "24px",
          }}
        />
        {projectTypesList.map((projectType) => (
          <TagButton
            isSelected={projectType === selectedProjectType}
            onClick={setSelectedProjectType}
            projectType={projectType}
          />
        ))}
      </div>

      <div className="columns is-multiline is-mobile mt-5">
        {projectList.length > 0 ? (
          projectList.map((project, index) => (
            <motion.div
              key={`${project.name}_${index}`}
              className="column is-12-mobile is-half-tablet is-one-third-desktop"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard key={`${project.name}_${index}`} project={project} />
            </motion.div>
          ))
        ) : (
          <div className="text subtitle is-size-5 mb-2 is-bold">
            Projects using {selectedProjectType} are in progress. Please wait
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
