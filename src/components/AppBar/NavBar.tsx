import { FC } from "react";
import { useTranslation } from "react-i18next";
import { sections } from "../../sections/sections";
import "./app-bar.scss";

type NavBarProps = {
  isMenuActive?: boolean;
};

const NavBar: FC<NavBarProps> = ({ isMenuActive = false }) => {
  const { t } = useTranslation();

  return (
    <div className="navbar-start">
      <a className="navbar-item" href={sections.about}>
        {t("navbar.menu.about")}
      </a>
      <a className="navbar-item" href={sections.portfolio}>
        {t("navbar.menu.projects")}
      </a>
      <a className="navbar-item" href={sections.skills}>
        {t("navbar.menu.skills")}
      </a>
      <a className="navbar-item" href={sections.certificates}>
        {t("navbar.menu.certificates")}
      </a>
    </div>
  );
};

export default NavBar;
