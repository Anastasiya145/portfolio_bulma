import { FC } from "react";
import { motion } from "framer-motion";
import SocialNetworksBar from "../components/custom buttons/SocialNetworksButtons/SocialNetworksBar";
import { useTranslation } from "react-i18next";
import MainLayout from "../layouts/MainLayout";
import { routes } from "../routes";
import "./home-page.scss";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  const { t } = useTranslation("home");

  return (
    <div id="home" className="home">
      <MainLayout className="home-page">
        <div
          className="home-page__container is-flex is-align-items-center"
          style={{
            height: "calc(100vh - 112px)", //64px navbar+ 24px/24px container
            overflow: "hidden",
          }}
        >
          <div className="home-page__titles container is-flex is-flex-direction-column">
            <h1
              className="home-page__title title is-1"
              style={{
                maxWidth: "max-content",
                position: "relative",
                zIndex: 2,
              }}
            >
              Anastasiya Ivanova
              <motion.div>
                <motion.span
                  className="home-page__colored-line has-background-link"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </h1>
            <div className="home-page__description mt-4">
              <h2 className="home-page__role subtitle is-size-4 mb-0 is-uppercase">
                {t("subtitle")}
              </h2>
              <h2 className="home-page__skills subtitle is-size-4 mt-0">
                {t("skills")}
              </h2>
            </div>
            <Link
              className="home-page__portfolio-button button is-link mt-6"
              to={routes.portfolio}
              style={{ maxWidth: "120px" }}
            >
              <strong>{t("main-button")}</strong>
              <span className="icon is-small">
                <i className="fas fa-angle-double-right"></i>
              </span>
            </Link>
          </div>

          <SocialNetworksBar />
        </div>
      </MainLayout>
    </div>
  );
};

export default HomePage;
