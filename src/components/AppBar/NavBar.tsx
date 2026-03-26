import { FC } from "react";
import { useTranslation } from "react-i18next";
import { sections } from "../../sections/sections";
import "./app-bar.scss";

type NavBarProps = {
  onNavigate?: () => void;
};

const NavBar: FC<NavBarProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="navbar-start">
      <a className="navbar-item" href={sections.about} onClick={onNavigate}>
        {t("navbar.menu.about")}
      </a>
      <a className="navbar-item" href={sections.portfolio} onClick={onNavigate}>
        {t("navbar.menu.projects")}
      </a>
      <a className="navbar-item" href={sections.skills} onClick={onNavigate}>
        {t("navbar.menu.skills")}
      </a>
      <a
        className="navbar-item"
        href={sections.certificates}
        onClick={onNavigate}
      >
        {t("navbar.menu.certificates")}
      </a>
    </div>
  );
};

export default NavBar;
