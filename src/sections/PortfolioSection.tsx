import { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import { useTranslation } from "react-i18next";
import SectionLayout from "../layouts/SectionLayout";

const PortfolioSection: FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      title={t("portfolioSection.title")}
      titleSpan={t("portfolioSection.titleSpan")}
      className="portfolio"
    >
      <ProjectsList />
    </SectionLayout>
  );
};

export default PortfolioSection;
