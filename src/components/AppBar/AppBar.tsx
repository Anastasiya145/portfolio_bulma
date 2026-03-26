import { FC, useEffect, useState } from "react";
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
  const closeMenu = () => setMenuActive(false);

  useEffect(() => {
    const isMobileViewport = window.matchMedia("(max-width: 960px)").matches;

    if (isMenuActive && isMobileViewport) {
      document.documentElement.classList.add("has-mobile-menu-open");
      document.body.classList.add("has-mobile-menu-open");
    } else {
      document.documentElement.classList.remove("has-mobile-menu-open");
      document.body.classList.remove("has-mobile-menu-open");
    }

    return () => {
      document.documentElement.classList.remove("has-mobile-menu-open");
      document.body.classList.remove("has-mobile-menu-open");
    };
  }, [isMenuActive]);

  return (
    <nav
      className={classNames("navbar app-bar", {
        "is-menu-active": isMenuActive,
      })}
      role="navigation"
    >
      <button
        type="button"
        className={classNames("app-bar__backdrop", {
          "is-active": isMenuActive,
        })}
        aria-label="Close menu"
        onClick={closeMenu}
      />

      <div className="navbar-brand">
        <a className="mx-2" href={sections.home}>
          <Logo />
        </a>

        <button
          type="button"
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
        </button>
      </div>

      <div className={classNames("navbar-menu", { "is-active": isMenuActive })}>
        <div className="app-bar__menu-layout">
          <NavBar onNavigate={closeMenu} />

          <div className="navbar-end app-bar__menu-actions">
            <div className="navbar-item is-flex is-gap-1 app-bar__menu-toggles">
              <ThemeButton />
              <LanguageButton />
            </div>

            <div className="navbar-item app-bar__menu-download">
              <DownloadCVButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
