import { FC } from "react";
import SkillsCard from "./SkillsCard";
import { useTranslation } from "react-i18next";
import "./skills-card.scss";

type Skill = {
  name: string;
  icon: string;
};

type FrontendSkills = {
  languages?: Skill[];
  frameworks?: Skill[];
  apis?: Skill[];
  tests?: Skill[];
  stateManager?: Skill[];
  css?: Skill[];
};

type BackendSkills = {
  languages?: Skill[];
  documentation?: Skill[];
};

type BDDSkills = {
  languages?: Skill[];
  sql?: Skill[];
};

type ProjectSkills = {
  methodologies?: Skill[];
  outils?: Skill[];
};

export type SkillSet =
  | FrontendSkills
  | BackendSkills
  | BDDSkills
  | ProjectSkills;

export type SkillItem = {
  name: string;
  description: string;
  icon: string;
  skillSet: SkillSet;
};

const SkillsCardsList: FC = () => {
  const { t } = useTranslation("aboutme");

  const skillsList: SkillItem[] = [
    {
      name: t("skillsSection.frontendCard.title"),
      description: t("skillsSection.frontendCard.subtitle"),
      icon: "fas fa-laptop-code",
      skillSet: {
        languages: [
          { name: "Javascript", icon: "fab fa-js" },
          { name: "Typescript", icon: "fab fa-js" },
        ],
        frameworks: [
          { name: "React.js", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vuejs" },
        ],
        apis: [
          { name: "Rest API", icon: "fas fa-cogs" },
          { name: "GraphQL", icon: "fas fa-cogs" },
        ],
        tests: [
          { name: "Jest", icon: "fab fa-js" },
          { name: "Cypress", icon: "fas fa-cogs" },
        ],
        stateManager: [{ name: "Redux", icon: "fas fa-layer-group" }],
        css: [
          { name: "SCSS/CSS", icon: "fab fa-css3" },
          { name: "Material UI", icon: "fas fa-layer-group" },
          { name: "Bulma", icon: "fas fa-layer-group" },
        ],
      },
    },
    {
      name: t("skillsSection.backendCard.title"),
      description: t("skillsSection.backendCard.subtitle"),
      icon: "fas fa-server",
      skillSet: {
        languages: [{ name: "Node.js", icon: "fab fa-node" }],
        documentation: [{ name: "Swagger", icon: "fas fa-book" }],
      },
    },
    {
      name: t("skillsSection.bddCard.title"),
      description: t("skillsSection.bddCard.subtitle"),
      icon: "fas fa-database",
      skillSet: {
        languages: [{ name: "SQL", icon: "fas fa-database" }],
        sql: [{ name: "PostgreSQL", icon: "fas fa-database" }],
      },
    },
    {
      name: t("skillsSection.projectCard.title"),
      description: t("skillsSection.projectCard.subtitle"),
      icon: "fas fa-tasks",
      skillSet: {
        methodologies: [{ name: "Scrum", icon: "fas fa-tachometer-alt" }],
        outils: [
          { name: "Jira", icon: "fab fa-jira" },
          { name: "Worksection", icon: "fas fa-briefcase" },
        ],
      },
    },
  ];

  return (
    <div className="skills-card-list">
      <div className="columns is-centered is-flex-wrap-wrap is-gap-6">
        {skillsList.map((skill, index) => (
          <div key={index} className="column is-12-mobile is-5-tablet">
            <SkillsCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardsList;
