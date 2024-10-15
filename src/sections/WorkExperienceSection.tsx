import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";
import WorkProject from "./WorkProject";
import img_1 from "../assets/images/Pulse_1.png";
import img_2 from "../assets/images/Pulse_2.png";
import img_3 from "../assets/images/Pulse_3.png";
import img_4 from "../assets/images/G3T_1.png";

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
      name: "Pulse",
      type: "Front-end",
      technologies: ["React", "Material UI", "React Router", "i18n"],
      description:
        "Biogas GO Auctions (Pulse) — это платформа для проведения аукционов по продаже и покупке биогаза. Она предоставляет функционал для публикации аукционов, подачи заявок, просмотра результатов в графическом формате, а также уведомления пользователей. Включены инструменты для администраторов, такие как управление пользователями и мониторинг операций.",
      images: [img_1, img_2, img_3],
    },
    {
      name: "G3T",
      type: "Front-end",
      technologies: ["React", "Material UI"],
      description: "to do",
      images: [img_4],
    },
  ];

  console.log(projects.length);

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
