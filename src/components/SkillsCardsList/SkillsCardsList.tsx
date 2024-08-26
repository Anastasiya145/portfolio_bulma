import { FC } from "react";
import SkillsCard from "./SkillsCard";
import "./skills-card.scss";

export type SkillItem = {
  name: string;
  description: string;
  icon: string;
  skillSet: {
    languages?: { name: string; icon: string }[];
    frameworks?: { name: string; icon: string }[];
    apis?: { name: string; icon: string }[];
    tests?: { name: string; icon: string }[];
    documentation?: { name: string; icon: string }[];
    sql?: { name: string; icon: string }[];
    methodologies?: { name: string; icon: string }[];
  };
};

const SkillsCardsList: FC = () => {
  const skillsList: SkillItem[] = [
    {
      name: "Frontend",
      description:
        "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      icon: "fas fa-laptop-code ",
      skillSet: {
        languages: [
          { name: "Javascript", icon: "fab fa-js" },
          { name: "Typescript", icon: "fab fa-js" },
          { name: "HTML", icon: "fab fa-html5" },
          { name: "SCSS/CSS", icon: "fab fa-css3" },
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
      },
    },
    {
      name: "Backend",
      description:
        "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      icon: "fas fa-server",
      skillSet: {
        languages: [{ name: "Node.js", icon: "fab fa-node" }],
        documentation: [{ name: "Swagger", icon: "fas fa-book" }],
      },
    },
    {
      name: "BDD",
      description:
        "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      icon: "fas fa-database",
      skillSet: {
        languages: [{ name: "SQL", icon: "fas fa-database" }],
        sql: [{ name: "PostgreSQL", icon: "fas fa-database" }],
      },
    },
    {
      name: "Projet",
      description:
        "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      icon: "fas fa-tasks",
      skillSet: {
        methodologies: [{ name: "Scrum", icon: "fas fa-tachometer-alt" }],
      },
    },
  ];

  return (
    <div className="skills-card-list">
      <div className="columns is-multiline">
        {skillsList.map((skill, index) => (
          <div key={index} className="column is-12-mobile is-6-tablet">
            <SkillsCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardsList;
