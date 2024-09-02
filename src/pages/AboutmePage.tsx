import { FC } from "react";
import aboutme_photo from "../assets/images/photo.jpg";
import MainLayout from "../layouts/MainLayout";
import SkillsCardsList from "../components/SkillsCardsList/SkillsCardsList";
import { useTranslation } from "react-i18next";
import DownloadCVButton from "../components/custom buttons/CvButton/DownloadCVButton";
import CertificatesList from "../components/CertificatesList";

const AboutmePage: FC = () => {
  const { t } = useTranslation("aboutme");

  const subSectionNames = ["background", "languages", "expertise"];

  return (
    <MainLayout title={t("title")} className="aboutme-page">
      <div id="about-me" className="aboutme-page__container">
        <div className="aboutme-page__columns columns is-desktop is-gap-2">
          <figure className="aboutme-page__photo column is-one-quarter-widescreen image">
            <img
              className="aboutme-page__img is-rounded is-1by1"
              src={aboutme_photo}
              alt="anastasiya ivanova"
              style={{
                borderRadius: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          </figure>

          <div className="aboutme-page__content column">
            <h2 className="aboutme-page__subtitle subtitle mb-5">
              {t("aboutmeSection.title")}
            </h2>
            <div className="aboutme-page__links">
              {subSectionNames.map((name) => (
                <div key={name} className="aboutme-page__subsection mt-4">
                  <p className="aboutme-page__subsection-title subtitle has-text-weight-semibold mb-2">
                    {t(`aboutmeSection.${name}SubSection.title`)}
                  </p>
                  <p className="aboutme-page__subsection-text text">
                    {t(`aboutmeSection.${name}SubSection.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills mt-6">
        <h2 className="skills__title title mb-5">{t("skillsSection.title")}</h2>
        <SkillsCardsList />
      </div>

      <CertificatesList />

      <DownloadCVButton />
    </MainLayout>
  );
};

export default AboutmePage;
