import { FC, useState } from "react";
import ThemeButton from "../custom buttons/ThemeButton";
import LanguageButton from "../custom buttons/LanguageButton";
import classNames from "classnames";
import DownloadCVButton from "../custom buttons/CvButton/DownloadCVButton";
import "./app-bar.scss";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { sections } from "../../sections/sections";

const AppBar: FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <a className="mx-2" href={sections.home}>
          <Logo />
        </a>

        <button
          className={classNames("navbar-burger", {
            "is-active": isMenuActive,
          })}
          aria-label="menu"
          aria-expanded={isMenuActive}
          onClick={() => setMenuActive((prev) => !prev)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={classNames("navbar-menu", { "is-active": isMenuActive })}>
        <NavBar isMenuActive={isMenuActive} />

        <div className="navbar-end">
          <div className="navbar-item is-flex is-gap-1">
            <DownloadCVButton />
            <ThemeButton />
            <LanguageButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
