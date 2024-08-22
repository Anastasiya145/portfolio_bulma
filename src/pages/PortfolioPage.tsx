import { FC } from "react";
import "./portfolio-page.scss";
import ProjectsList from "../components/ProjectsList";
import MainLayout from "../layouts/MainLayout";

const PortfolioPage: FC = () => {
  return (
    <MainLayout title="Some of my projects" className="portfolio">
      <div id="portfolio" className="portfolio_project-list">
        <ProjectsList />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
