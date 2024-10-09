import { FC } from "react";
import aboutme_photo from "../assets/images/About_me.svg";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";

const AboutmeSection: FC = () => {
  const { t } = useTranslation();

  const subSectionNames = ["background", "languages", "expertise"];

  return (
    <SectionLayout
      title={t("aboutmeSection.title")}
      upperSubTitle={t("aboutmeSection.subtitle")}
      titleSpan={t("aboutmeSection.titleSpan")}
      className="about-me"
    >
      <div className="about-me__columns columns is-gap-4">
        <div className="about-me__content column is-12-mobile is-8-tablet is-6-desktop">
          <div className="about-me__links">
            {subSectionNames.map((name) => (
              <div key={name} className="about-me__subsection mb-6">
                <p className="about-me__subsection-title subtitle has-text-weight-semibold mb-2">
                  {t(`aboutmeSection.aboutmeSection.${name}SubSection.title`)}
                </p>
                <p className="about-me__subsection-text text">
                  {t(`aboutmeSection.aboutmeSection.${name}SubSection.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <figure className="about-me__photo is-12-mobile is-4-tablet is-6-desktop is-hidden-mobile">
          <img className="about-me__img" src={aboutme_photo} alt="about me" />
        </figure>
      </div>
    </SectionLayout>
  );
};

export default AboutmeSection;
