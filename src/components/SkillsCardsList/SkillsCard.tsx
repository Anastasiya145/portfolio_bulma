import { FC } from "react";
import { SkillItem, SkillSet } from "./SkillsCardsList";
import "./skills-card.scss";
import { useTranslation } from "react-i18next";

type SkillsCardType = {
  skill: SkillItem;
};

const SkillsCard: FC<SkillsCardType> = ({ skill }) => {
  const { t } = useTranslation("aboutme");

  const cardName = `${skill.name}Card`;
  const name = t(`skillsSection.${cardName}.title`);
  const description = t(`skillsSection.${cardName}.subtitle`);

  return (
    <div className="skills-card box is-flex is-flex-direction-column has-text-centered">
      <div
        className="skills-card__link-section mb-4"
        style={{ maxWidth: "60%", margin: "0 auto" }}
      >
        <span className="icon is-large has-text-link">
          <i className={`${skill.icon} fas fa-3x`}></i>
        </span>
        <h1 className="skills-card__title title is-size-4 is-spaced mt-4 mb-4">
          {name.toUpperCase()}
        </h1>
        <div className="skills-card__description subtitle mb-3">
          {description}
        </div>
      </div>

      <div className="skills-card__skillsset is-flex is-flex-direction-column">
        {(Object.keys(skill.skillSet) as Array<keyof SkillSet>).map(
          (category: string) => {
            const items: SkillItem = skill.skillSet[category as keyof SkillSet];

            if (!items || !Array.isArray(items)) return null;

            const categoryTitle = t(
              `skillsSection.${cardName}.categories.${category}`
            );

            return (
              <div
                key={category}
                className="skills-card__category columns is-flex"
              >
                <p className="skills-card__category-title column is-one-third mb-2">
                  {categoryTitle}
                </p>
                <ul className="skills-card__list column is-two-third has-text-left">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="skills-card__list-item tag is-rounded mr-2"
                    >
                      <span className="skills-card__icon has-text-link mr-2">
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
