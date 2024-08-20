import { FC } from "react";
import "./skills-card.scss";

type SkillsCategory =
  | "languages"
  | "frameworks"
  | "apis"
  | "tests"
  | "documentation"
  | "sql"
  | "methodologies";

type SkillItem = {
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

const SkillsCard: FC = () => {
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
    <div className="skills-card box">
      <div className="skills-card__content">
        <div className="columns is-centered">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className={`skills-card__column column ${
                index === 0 ? "is-two-fifths" : "is-one-fifth"
              }`}
            >
              <span className="icon is-large has-text-primary ">
                <i className={`${skill.icon} fas fa-3x`}></i>
              </span>
              <h1 className="skills-card__title title is-size-4 is-spaced">
                {skill.name.toUpperCase()}
              </h1>
              <div className="skills-card__description">{skill.description}</div>

              <div className="skills-card__skillsset is-flex is-flex-wrap-wrap is-justify-content-center">
                {Object.keys(skill.skillSet).map((category) => (
                  <div key={category} className="skills-card__category">
                    <p className="skills-card__category-title title is-size-4">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                    <ul className="skills-card__list">
                      {(skill.skillSet[category as SkillsCategory] || []).map((item, idx) => (
                        <li key={idx} className="skills-card__list-item is-flex">
                          <span className="skills-card__icon has-text-primary mr-2">
                            <i className={item.icon}></i>
                          </span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
