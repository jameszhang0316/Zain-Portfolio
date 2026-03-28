import React from "react";
import "./PortfolioProjectCard.css";
import { Fade } from "react-reveal";

export default function PortfolioProjectCard({ project, theme }) {
  return (
    <div
      className="portfolio-project-card"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={project.id}>
          <p
            className="portfolio-project-category"
            style={{ color: theme.imageHighlight }}
          >
            {project.category}
          </p>
          <h3 className="portfolio-project-title" style={{ color: theme.text }}>
            {project.name}
          </h3>
          <p
            className="portfolio-project-dates subTitle"
            style={{ color: theme.secondaryText }}
          >
            {project.dateRange}
          </p>
          <p
            className="portfolio-project-section-label"
            style={{ color: theme.text }}
          >
            Client request
          </p>
          <p
            className="portfolio-project-client"
            style={{ color: theme.secondaryText }}
          >
            “{project.clientRequest}”
          </p>
          <p
            className="portfolio-project-section-label"
            style={{ color: theme.text }}
          >
            Work done
          </p>
          <ul className="portfolio-project-list" style={{ color: theme.text }}>
            {project.workDone.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p
            className="portfolio-project-section-label"
            style={{ color: theme.text }}
          >
            Tech
          </p>
          <div className="portfolio-project-tech">
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  color: theme.text,
                  backgroundColor: theme.body,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
