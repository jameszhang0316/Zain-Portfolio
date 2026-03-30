import React from "react";
import PortfolioProjectCard from "../../components/portfolioProjectCard/PortfolioProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../data/portfolio_projects.json";
import "../../pages/projects/Projects.css";
import ProjectsImg from "../../pages/projects/ProjectsImg";

/** Projects block for the single-page layout (no header/footer). */
export default function ProjectsSection({ theme }) {
  return (
    <section id="projects" className="projects-main">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((project) => (
          <PortfolioProjectCard
            key={project.id}
            project={project}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}
