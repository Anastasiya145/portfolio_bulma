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

type SkillsCardType = {
  skill: SkillItem;
};

type SkillsInfoType = {
  skill: SkillItem;
};

const SkillsCard: FC<SkillsCardType> = ({ skill }) => {
  const SkillsInfo: FC<SkillsInfoType> = ({ skill }) => {
    return (
      <div className="skills-card__info-section mb-4">
        <span className="icon is-large has-text-primary">
          <i className={`${skill.icon} fas fa-3x`}></i>
        </span>
        <h1 className="skills-card__title title is-size-4 is-spaced mt-4 mb-4">
          {skill.name.toUpperCase()}
        </h1>
        <div className="skills-card__description mb-3">{skill.description}</div>
      </div>
    );
  };

  return (
    <div className="skills-card box is-flex is-flex-direction-column has-text-centered">
      <SkillsInfo skill={skill} />

      <div className="skills-card__skillsset is-flex is-flex-direction-column">
        {Object.keys(skill.skillSet).map((category) => (
          <div
            key={category}
            className="skills-card__category is-flex is-gap-1"
          >
            <p className="skills-card__category-title mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
            <ul className="skills-card__list">
              {(skill.skillSet[category as SkillsCategory] || []).map(
                (item, index) => (
                  <li
                    key={index}
                    className="skills-card__list-item tag is-rounded mr-2"
                  >
                    <span className="skills-card__icon has-text-primary mr-2">
                      <i className={item.icon}></i>
                    </span>
                    <p className="skills-card__text  is-size-6">{item.name}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
