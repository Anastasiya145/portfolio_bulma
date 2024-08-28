import { FC } from "react";
import aboutme_photo from "../assets/images/photo.jpg";
import MainLayout from "../layouts/MainLayout";
import SkillsCardsList from "../components/SkillsCardsList/SkillsCardsList";
import { useTranslation } from "react-i18next";

const AboutmePage: FC = () => {
  const { t } = useTranslation("aboutme");

  const subSectionNames = ["background", "languages", "expertise"];

  return (
    <MainLayout title="Hello, nice to meet you 👋" className="aboutme-page">
      <div id="about-me">
        <div className="columns is-desktop is-gap-2">
          <figure className="column is-one-quarter-widescreen image">
            <img
              className="is-rounded is-1by1"
              src={aboutme_photo}
              alt="anastasiya ivanova"
              style={{
                borderRadius: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          </figure>

          <div className="column">
            <h2 className="aboutme-page__subtitle subtitle mb-5">
              {t("aboutmeSection.title")}
            </h2>
            <div className="aboutme-page__info">
              {subSectionNames.map((name) => (
                <div className="aboutme-page__subsection mt-4">
                  <p className="subtitle has-text-weight-semibold mb-2">
                    {t(`aboutmeSection.${name}SubSection.title`)}
                  </p>
                  <p className="text">
                    {t(`aboutmeSection.${name}SubSection.text`)}
                  </p>
                  {name === "background" && (
                    <a className="button" href="certificates">
                      {t(`aboutmeSection.${name}SubSection.link`)}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills mt-6">
        <h2 className="skills__title mb-5">{t("skillsSection.title")}</h2>
        <SkillsCardsList />
      </div>
    </MainLayout>
  );
};

export default AboutmePage;
