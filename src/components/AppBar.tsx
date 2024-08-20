import { FC } from "react";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

const AppBar: FC = () => {
  const { t } = useTranslation("navbar");

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="icon-text">
            <span className="icon is-large">
              <i className="fas fa-home"></i>
            </span>
          </span>
        </a>

        <a
          role="button"
          className="navbar-burger"
          // aria-label="menu"
          // aria-expanded="false"
          // data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="about">
            {t("menu.about")}
          </a>
          <a className="navbar-item" href="portfolio">
            {t("menu.projects")}
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <LanguageSelect />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
