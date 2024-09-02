import { FC } from "react";
import SkillsCard from "./SkillsCard";
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

type Testskiklls = {
  frameworks?: Skill[];
};

type ProjectSkills = {
  methodologies?: Skill[];
  outils?: Skill[];
};

export type SkillSet =
  | FrontendSkills
  | BackendSkills
  | BDDSkills
  | Testskiklls
  | ProjectSkills;

export type SkillItem = {
  name: string;
  icon: string;
  skillSet: SkillSet;
};

const SkillsCardsList: FC = () => {
  const skillsList: SkillItem[] = [
    {
      name: "frontend",
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
        css: [
          { name: "SCSS/CSS", icon: "fab fa-css3" },
          { name: "Material UI", icon: "fas fa-layer-group" },
          { name: "Bulma", icon: "fas fa-layer-group" },
        ],
        apis: [
          { name: "Rest API", icon: "fas fa-cogs" },
          { name: "GraphQL", icon: "fas fa-cogs" },
        ],
        stateManager: [{ name: "Redux", icon: "fas fa-layer-group" }],
      },
    },
    {
      name: "backend",
      icon: "fas fa-server",
      skillSet: {
        languages: [{ name: "Node.js", icon: "fab fa-node" }],
        documentation: [{ name: "Swagger", icon: "fas fa-book" }],
      },
    },
    {
      name: "bdd",
      icon: "fas fa-database",
      skillSet: {
        languages: [{ name: "SQL", icon: "fas fa-database" }],
        sql: [{ name: "PostgreSQL", icon: "fas fa-database" }],
      },
    },
    {
      name: "tests",
      icon: "fas fa-cogs",
      skillSet: {
        frameworks: [
          { name: "Jest", icon: "fab fa-js" },
          { name: "Cypress", icon: "fas fa-cogs" },
        ],
      },
    },
    {
      name: "project",
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
