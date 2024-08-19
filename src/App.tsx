import React from "react";
import "bulma/css/bulma.min.css";
import ProjectsList from "./components/ProjectsList";
import AppBar from "./components/AppBar";
import Tabs from "./components/Tabs";
import aboutme_photo from "./assets/images/photo.jpg";
import MainTitle from "./components/IntroSection";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div className="App">
      <div className="header">
        <AppBar />
      </div>
      <IntroSection />

      <section id="about-me" className="section about-me">
        <div className="columns is-desktop">
          <figure className="column is-one-quarter-widescreen image mr-6">
            <img
              className="is-rounded is-1by1"
              src={aboutme_photo}
              alt="My photo"
            />
          </figure>

          <div className="column">
            <h1 className="title">About Me</h1>
            <h2 className="subtitle mt-4">
              I'm a Software Developer with 3 years of experience in
              <strong>
                JS, TypeScript, HTML, CSS, Preprocessors, and React.js/Vue.js.
              </strong>
              Higher mathematics education and project management experience
              shaped my research mindset, strong problem-solving, and
              communication skills, and deep understanding of workflow, task
              estimation, and organization. I have an Upper-Intermediate level
              of English and French, and I speak and write these languages well.
            </h2>
            <Tabs />
          </div>
        </div>
      </section>
      <section id="portfolio" className="section portfolio">
        <h1 className="title">Portfolio</h1>
        <h2 className="subtitle">Some of my projects</h2>
        <ProjectsList />
      </section>

      <footer className="section is-primary is-small has-text-centered">
        <div className="container is-narrow">
          <a className="logo has-text-white is-large" href="/">
            <i className="fas fa-globe fas fa-3x"></i>
          </a>
          <div className="columns is-centered mt-6">
            <div className="column is-one-third">
              <h1 className="title is-size-4-touch has-text-weight-normal">
                Living, learning, &amp; and keep code.
              </h1>
            </div>
          </div>
          <div className="social-icons columns is-centered mt-4">
            <div className="buttons are-medium ">
              <a
                className="button"
                href="https://www.linkedin.com/in/anastasiya-ivanova-494567109/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
              <a
                className="button"
                href="https://github.com/Anastasiya145"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon has-text-white">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a className="button" href="mailto:asiva@ukr.net">
                <span className="icon has-text-white">
                  <i className="far fa-envelope fa-fw"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="made-by-bulma mt-6">
            <a href="https://bulma.io">
              <img
                src="https://bulma.io/assets/images/made-with-bulma.png"
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
