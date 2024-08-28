import { FC } from "react";
import { SkillItem, SkillSet } from "./SkillsCardsList";
import "./skills-card.scss";

type SkillsCardType = {
  skill: SkillItem;
};

const SkillsCard: FC<SkillsCardType> = ({ skill }) => {
  return (
    <div className="skills-card box is-flex is-flex-direction-column has-text-centered">
      <div
        className="skills-card__info-section mb-4"
        style={{ maxWidth: "60%", margin: "0 auto" }}
      >
        <span className="icon is-large has-text-primary">
          <i className={`${skill.icon} fas fa-3x`}></i>
        </span>
        <h1 className="skills-card__title title is-size-4 is-spaced mt-4 mb-4">
          {skill.name.toUpperCase()}
        </h1>
        <div className="skills-card__description subtitle mb-3">
          {skill.description}
        </div>
      </div>

      <div className="skills-card__skillsset is-flex is-flex-direction-column">
        {(Object.keys(skill.skillSet) as Array<keyof SkillSet>).map(
          (category: string) => {
            const items: SkillItem = skill.skillSet[category as keyof SkillSet];

            if (!items || !Array.isArray(items)) return null;

            return (
              <div
                key={category}
                className="skills-card__category columns is-flex"
              >
                <p className="skills-card__category-title column is-one-third mb-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
                <ul className="skills-card__list column is-two-third has-text-left">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="skills-card__list-item tag is-rounded mr-2"
                    >
                      <span className="skills-card__icon has-text-primary mr-2">
                        <i className={item.icon}></i>
                      </span>
                      <p className="skills-card__text is-size-6">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
