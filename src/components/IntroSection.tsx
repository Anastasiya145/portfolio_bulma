import { FC } from "react";
import "./intro-section.scss";

const IntroSection: FC = () => {
  return (
    <section id="home" className="section intro">
      <h1 className="title is-title-main">
        <span>Anastasiya Ivanova</span>
        <span className="colored-line is-primary" />
      </h1>
      <div className="block">
        <p className="subtitle mb-2">since 2022</p>
        <h2 className="title is-size-4 mb-0">Front End developer</h2>
        <h2 className="title is-size-4 mb-5">React lover</h2>
      </div>
      <a className="button is-primary" href="#portfolio">
        <strong>See my last projects</strong>
        <span className="icon is-small">
          <i className="fas fa-angle-double-right"></i>
        </span>
      </a>
    </section>
  );
};

export default IntroSection;
