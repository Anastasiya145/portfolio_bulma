import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import WorkProject from "./WorkProject";
import pulse_1 from "../assets/images/Pulse_1.png";
import pulse_2 from "../assets/images/Pulse_2.png";
import pulse_3 from "../assets/images/Pulse_3.png";
import g3t_1 from "../assets/images/G3T_1.png";
import g3t_2 from "../assets/images/G3T_2.png";
import dateApp_0 from "../assets/images/dateApp_0.png";
import dateApp_1 from "../assets/images/dateApp_1.png";
import dateApp_2 from "../assets/images/dateApp_2.png";
import dateApp_3 from "../assets/images/dateApp_3.png";
import dateApp_4 from "../assets/images/dateApp_4.png";

export type Project = {
  name: string;
  type: string;
  technologies: string[];
  description: string;
  images: string[];
};

const WorkExperienceSection: FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      name: t("workExperienceSection.project1.name"),
      type: "Front-end",
      technologies: ["React", "Material UI", "React Router", "i18n"],
      description: t("workExperienceSection.project1.text"),
      images: [pulse_1, pulse_2, pulse_3],
    },
    {
      name: t("workExperienceSection.project2.name"),
      type: "Front-end",
      technologies: ["React", "React Router", "Material UI"],
      description: t("workExperienceSection.project2.text"),
      images: [g3t_1, g3t_2],
    },
    {
      name: t("workExperienceSection.project3.name"),
      type: "Front-end",
      technologies: ["Vue.js", "SASS"],
      description: t("workExperienceSection.project3.text"),
      images: [dateApp_0, dateApp_1, dateApp_2, dateApp_3, dateApp_4],
    },
  ];

  return (
    <SectionLayout
      title={t("workExperienceSection.title")}
      titleSpan={t("workExperienceSection.titleSpan")}
      className="work-experience"
    >
      {projects.map((project) => (
        <WorkProject key={project.name} project={project} />
      ))}
    </SectionLayout>
  );
};

export default WorkExperienceSection;
