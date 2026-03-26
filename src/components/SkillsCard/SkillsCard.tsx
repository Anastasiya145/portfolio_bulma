import { FC } from "react";
import { SkillItem, SkillSet } from "../../sections/SkillsSection";
import { useTranslation } from "react-i18next";
import "./skills-card.scss";

type SkillsCardType = {
  skill: SkillItem;
};

const SkillsCard: FC<SkillsCardType> = ({ skill }) => {
  const { t } = useTranslation();

  const cardName = `${skill.name}Card`;
  const name = t(`skillsSection.${cardName}.title`);
  const description = t(`skillsSection.${cardName}.subtitle`);
  const categories = (Object.keys(skill.skillSet) as Array<keyof SkillSet>)
    .map((category) => {
      const items = skill.skillSet[category];

      if (!items || !Array.isArray(items)) {
        return null;
      }

      return {
        key: String(category),
        title: t(`skillsSection.${cardName}.categories.${String(category)}`),
        items,
      };
    })
    .filter(Boolean) as Array<{
    key: string;
    title: string;
    items: Array<{ name: string; icon: string }>;
  }>;

  return (
    <article className={`skills-card skills-card--${skill.name} box`}>
      <div className="skills-card__header">
        <span className="skills-card__icon-wrap icon has-text-link">
          <i className={`${skill.icon} fa-sm`}></i>
        </span>

        <div className="skills-card__headline">
          <h1 className="skills-card__title title is-size-4 mb-2">{name}</h1>
          <div className="skills-card__description subtitle mb-0">
            {description}
          </div>
        </div>
      </div>

      <div className="skills-card__groups">
        {categories.map((category) => (
          <section key={category.key} className="skills-card__category">
            <p className="skills-card__category-title">{category.title}</p>
            <ul className="skills-card__list">
              {category.items.map((item) => (
                <li
                  key={`${category.key}_${item.name}`}
                  className="skills-card__list-item technology-chip"
                >
                  <span className="skills-card__skill-icon">
                    <i className={item.icon}></i>
                  </span>
                  <span className="skills-card__text">{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
};

export default SkillsCard;
