import { FC } from "react";
import { motion } from "framer-motion";
import SocialNetworksBar from "../components/Social Buttons/SocialNetworksBar";
import "./home-page.scss";
import { useTranslation } from "react-i18next";

const HomePage: FC = () => {
  const { t } = useTranslation("home");

  return (
    <div id="home" className="home-page">
      <div className="home-page__titles container">
        <h1 className="home-page__title">
          <span className="home-page__name">Anastasiya Ivanova</span>
          <motion.div>
            <motion.span
              className="home-page__colored-line has-background-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </h1>
        <div className="home-page__description">
          <h2 className="home-page__role title is-size-3 mb-0">
            {t("subtitle")}
          </h2>
          <h2 className="home-page__skills mt-0">{t("skills")}</h2>
        </div>
        <a
          className="home-page__portfolio button is-primary mt-6"
          href="portfolio"
        >
          <strong>{t("main-button")}</strong>
          <span className="icon is-small">
            <i className="fas fa-angle-double-right"></i>
          </span>
        </a>
      </div>
      <SocialNetworksBar />
    </div>
  );
};

export default HomePage;
