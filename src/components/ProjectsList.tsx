import { FC, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import img_2048_game from "../assets/images/2048_game.png";
import img_todos_app from "../assets/images/Todos_app.png";
import img_apple_store from "../assets/images/Apple_store.png";
import img_creative_bakery from "../assets/images/Creative_Bakery.png";
import img_dia from "../assets/images/DIA.png";
import img_dashboard from "../assets/images/Dashboard.png";
import img_authapp from "../assets/images/img_auth-app.png";
import img_weatherapp from "../assets/images/weather-app.png";
import { motion } from "framer-motion";
import TagButton from "./custom buttons/TagButton/TagButton";
import { useTranslation } from "react-i18next";

const projectTypesList = [
  "React",
  "TS",
  "Vue.js",
  "Node.js",
  "Landing page",
  "Pure JS",
] as const;

const cssStylesTypesList = [
  "Material UI",
  "Tailwind",
  "Bulma",
  "CSS",
  "SASS",
] as const;

export type ProjectType = (typeof projectTypesList)[number] | "All Projects";
export type cssStylesType = (typeof cssStylesTypesList)[number];

export type ProjectData = {
  name: string;
  text: string;
  img: string;
  languages: ProjectType[];
  styles: cssStylesType;
  urlCode: string;
  urlDemo: string;
  imgPosition?: "center" | "left" | "right";
};

const ProjectsList: FC = () => {
  const { t } = useTranslation();

  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectType>("All Projects");

  const filteredProjectList = useMemo(() => {
    const data: ProjectData[] = [
      {
        name: t("portfolioSection.projects.authApp.name"),
        text: t("portfolioSection.projects.authApp.text"),
        img: img_authapp,
        languages: ["React", "TS", "Node.js"],
        styles: "Material UI",
        urlCode: "https://github.com/Anastasiya145/react_auth-app_client",
        urlDemo: "https://anastasiya145.github.io/react_auth-app_client/",
        imgPosition: "center",
      },
      {
        name: t("portfolioSection.projects.appleStore.name"),
        text: t("portfolioSection.projects.appleStore.text"),
        img: img_apple_store,
        languages: ["React", "TS"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/react_apple-store",
        urlDemo: "https://anastasiya145.github.io/react_apple-store/",
      },
      {
        name: t("portfolioSection.projects.todosApp.name"),
        text: t("portfolioSection.projects.todosApp.text"),
        img: img_todos_app,
        languages: ["React", "TS"],
        styles: "Bulma",
        urlCode: "https://github.com/Anastasiya145/to-do_react_app",
        urlDemo: "https://anastasiya145.github.io/to-do_react_app/",
        imgPosition: "center",
      },
      {
        name: t("portfolioSection.projects.todosApp.name"),
        text: t("portfolioSection.projects.todosApp.text"),
        img: img_weatherapp,
        languages: ["Vue.js", "TS"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/vue_weather-app",
        urlDemo: "https://anastasiya145.github.io/vue_weather-app/",
        imgPosition: "center",
      },
      {
        name: t("portfolioSection.projects.game2048.name"),
        text: t("portfolioSection.projects.game2048.text"),
        img: img_2048_game,
        languages: ["Pure JS"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/2048_game",
        urlDemo: "https://anastasiya145.github.io/2048_game/",
        imgPosition: "center",
      },
      {
        name: t("portfolioSection.projects.dia.name"),
        text: t("portfolioSection.projects.dia.text"),
        img: img_dia,
        languages: ["Landing page", "Pure JS"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/dia_landing",
        urlDemo: "https://anastasiya145.github.io/dia_landing/",
      },
      {
        name: t("portfolioSection.projects.creativeBakery.name"),
        text: t("portfolioSection.projects.creativeBakery.text"),
        img: img_creative_bakery,
        languages: ["Landing page"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/Creative-Bakery",
        urlDemo: "https://anastasiya145.github.io/Creative-Bakery/",
      },
      {
        name: t("portfolioSection.projects.dashboard.name"),
        text: t("portfolioSection.projects.dashboard.text"),
        img: img_dashboard,
        languages: ["Landing page"],
        styles: "SASS",
        urlCode: "https://github.com/Anastasiya145/Dashboard",
        urlDemo: "https://anastasiya145.github.io/Dashboard/",
      },
    ];

    return data.filter((project) =>
      selectedProjectType === "All Projects"
        ? true
        : project.languages.includes(selectedProjectType)
    );
  }, [selectedProjectType, t]);

  return (
    <section id="portfolio" className="project-list">
      <div className="project-list__filter field is-grouped is-grouped-multiline is-justify-content-center mt-4">
        <TagButton
          isSelected={"All Projects" === selectedProjectType}
          onClick={setSelectedProjectType}
          projectType={"All Projects"}
        />
        <div
          className="project-list__divider custom-divider mx-4 is-align-self-center has-background-light"
          style={{
            width: "1px",
            height: "24px",
          }}
        />
        {projectTypesList.map((projectType) => (
          <TagButton
            key={projectType}
            isSelected={projectType === selectedProjectType}
            onClick={setSelectedProjectType}
            projectType={projectType}
          />
        ))}
      </div>

      <div className="project-list__items columns is-multiline is-mobile mt-5">
        {filteredProjectList.length > 0 ? (
          filteredProjectList.map((project, index) => (
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
          <div className="project-list__no-projects text subtitle is-size-5 mb-2 is-bold">
            Projects using {selectedProjectType} are in progress. Please wait
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
