import { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const PortfolioPage: FC = () => {
  const { t } = useTranslation("portfolio");

  return (
    <MainLayout title={t("title")} className="portfolio">
      <div id="portfolio" className="portfolio_project-list">
        <ProjectsList />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
