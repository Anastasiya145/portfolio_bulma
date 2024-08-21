import { FC } from "react";
import aboutme_photo from "../assets/images/photo.jpg";
import "./aboutme-page.scss";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import MainLayout from "../layouts/MainLayout";

const AboutmePage: FC = () => {
  return (
    <MainLayout title="Hello, nice to meet you 👋" className="aboutme-page">
      <div id="about-me">
        <div className="columns is-desktop">
          <figure className="column is-one-quarter-widescreen image mr-6">
            <img className="is-rounded is-1by1" src={aboutme_photo} alt="My photo" />
          </figure>

          <div className="column">
            <h2 className="aboutme-page__subtitle subtitle mt-4">
              I'm a Software Developer with 3 years of experience in JS, TypeScript, HTML, CSS,
              Preprocessors, and React.js/Vue.js.
            </h2>
            <p className="">
              🧑‍💻 Higher mathematics education and project management experience shaped my research
              mindset, strong problem-solving, and communication skills, and deep understanding of
              workflow, task estimation, and organization.
            </p>
            <p className="">
              👨‍🎓 I have an Upper-Intermediate level of English and French, and I speak and write
              these languages well.
            </p>
            <p className="">
              👨‍🎓 During this time, I was able to increase my expertise in several areas:
            </p>
          </div>
        </div>
        {/* <Tabs /> */}
      </div>

      <div className="skills">
        <h2 className="skills__title">Technical Skills</h2>
        <SkillsCard />
      </div>
    </MainLayout>
  );
};

export default AboutmePage;