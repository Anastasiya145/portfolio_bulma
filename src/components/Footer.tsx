import React from "react";
import Logo from "../components/AppBar/Logo";
import NavBar from "../components/AppBar/NavBar";
import SocialNetworksBar from "../components/SocialNetworksBar";
import { sections } from "../sections/sections";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-flex is-align-items-center is-justify-content-space-between">
          <div className="column">
            <a href={sections.home}>
              <Logo />
            </a>
          </div>

          <div className="column has-text-centered">
            <nav className="footer-nav">
              <NavBar />
            </nav>
          </div>

          <div className="column has-text-right">
            <SocialNetworksBar />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
