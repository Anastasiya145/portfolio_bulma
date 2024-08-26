import { FC } from "react";
import ProjectsList from "../components/ProjectsList";
import MainLayout from "../layouts/MainLayout";
import "./portfolio-page.scss";

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
