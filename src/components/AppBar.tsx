import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeButton from "./custom buttons/ThemeButton";
import LanguageButton from "./custom buttons/LanguageButton";
import classNames from "classnames";

const AppBar: FC = () => {
  const { t } = useTranslation("navbar");

  const [isMenuActive, setMenuActive] = useState(false);

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

        <button
          className={classNames("navbar-burger", {
            "is-active": isMenuActive,
          })}
          aria-label="menu"
          aria-expanded={isMenuActive}
          onClick={() => setMenuActive((prev) => !prev)}
        >
          {/* // need it to show lines of burger */}
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={classNames("navbar-menu", { "is-active": isMenuActive })}>
        <div className="navbar-start">
          <a className="navbar-item" href="/about">
            {t("menu.about")}
          </a>
          <a className="navbar-item" href="/portfolio">
            {t("menu.projects")}
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item is-flex is-gap-1">
            <ThemeButton />
            <LanguageButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
