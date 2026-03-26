import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import { sections } from "./sections";

const AboutmeSection: FC = () => {
  const { t } = useTranslation();

  const storySections = ["background", "languages"];
  const highlights = [
    {
      value: t("aboutmeSection.highlights.experienceValue"),
      label: t("aboutmeSection.highlights.experienceLabel"),
    },
    {
      value: t("aboutmeSection.highlights.languagesValue"),
      label: t("aboutmeSection.highlights.languagesLabel"),
    },
    {
      value: t("aboutmeSection.highlights.focusValue"),
      label: t("aboutmeSection.highlights.focusLabel"),
    },
  ];
  const focusTags = ["React", "TypeScript", "Node.js", "UI/UX"];

  return (
    <SectionLayout
      title={t("aboutmeSection.title")}
      titleSpan={t("aboutmeSection.titleSpan")}
      className="about-me"
    >
      <div className="about-me__layout">
        <div className="about-me__hero">
          <div className="about-me__lead">
            <p className="about-me__eyebrow mb-3">
              {t("aboutmeSection.summaryLabel")}
            </p>
            <p className="about-me__summary mb-5">
              {t("aboutmeSection.aboutmeSection.title")}
            </p>

            <div className="about-me__tags">
              {focusTags.map((tag) => (
                <span key={tag} className="about-me__tag technology-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="about-me__metrics">
            {highlights.map((item) => (
              <article key={item.label} className="about-me__metric">
                <p className="about-me__metric-value mb-2">{item.value}</p>
                <p className="about-me__metric-label mb-0">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-me__details">
          {storySections.map((name, index) => (
            <article key={name} className="about-me__story">
              <p className="about-me__story-index mb-3">0{index + 1}</p>
              <p className="about-me__subsection-title subtitle has-text-weight-semibold mb-3">
                {t(`aboutmeSection.aboutmeSection.${name}SubSection.title`)}
              </p>
              <p className="about-me__subsection-text text mb-0">
                {t(`aboutmeSection.aboutmeSection.${name}SubSection.text`)}
              </p>
            </article>
          ))}

          <article className="about-me__focus">
            <div className="about-me__focus-content">
              <p className="about-me__story-index about-me__story-index--focus mb-0">
                03
              </p>
              <p className="about-me__subsection-title subtitle has-text-weight-semibold mb-3">
                {t("aboutmeSection.aboutmeSection.expertiseSubSection.title")}
              </p>
              <p className="about-me__subsection-text text mb-0">
                {t("aboutmeSection.aboutmeSection.expertiseSubSection.text")}
              </p>

              <a className="about-me__focus-link" href={sections.certificates}>
                {t("aboutmeSection.aboutmeSection.expertiseSubSection.link")}
              </a>
            </div>
          </article>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutmeSection;
