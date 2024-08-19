import { FC } from "react";
import LanguageButton from "./LanguageButton";

const AppBar: FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
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

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#about-me">
            About Me
          </a>
          <a className="navbar-item" href="#portfolio">
            My projects
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <LanguageButton />
            {/* <div className="buttons">
              <a
                className="button is-link"
                download="../assets/files/photo.pdf"
              >
                <strong>Download CV</strong>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
