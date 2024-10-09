import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sections } from "./sections";
import "./intro.scss";
import SectionLayout from "../layouts/SectionLayout";

const IntroSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className="intro">
      <div
        className="intro__container is-flex is-align-items-center"
        style={{
          height: "calc(100vh - 112px)", //64px navbar+ 24px/24px container
          overflow: "hidden",
        }}
      >
        <div className="intro__titles container is-flex is-flex-direction-column">
          <h1
            className="intro__title title is-2"
            style={{
              maxWidth: "max-content",
              position: "relative",
              zIndex: 2,
            }}
          >
            Anastasiya Ivanova
            <motion.div>
              <motion.span
                className="intro__colored-line has-background-link"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </h1>
          <div className="intro__description mt-4">
            <h2 className="intro__role subtitle is-size-4 mb-0 is-uppercase">
              {t("intoSection.subtitle")}
            </h2>
            <h2 className="intro__skills subtitle is-size-4 mt-0">
              {t("intoSection.skills")}
            </h2>
          </div>
          <a
            className="intro__portfolio-button button is-link mt-6"
            href={sections.portfolio}
            style={{ maxWidth: "120px" }}
          >
            <strong>{t("intoSection.main-button")}</strong>
            <span className="icon is-small">
              <i className="fas fa-angle-double-right"></i>
            </span>
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

export default IntroSection;
