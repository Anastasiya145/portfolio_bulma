import { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";
import DownloadCVButton from "../components/custom buttons/CvButton/DownloadCVButton";

const PortfolioPage: FC = () => {
  const { t } = useTranslation("portfolio");

  return (
    <MainLayout title={t("title")} className="portfolio">
      <ProjectsList />
      <DownloadCVButton />
    </MainLayout>
  );
};

export default PortfolioPage;
