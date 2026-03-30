import React, { useState } from "react";
import "./PortfolioProjectCard.css";
import { Fade } from "react-reveal";

export default function PortfolioProjectCard({ project, theme }) {
  const [open, setOpen] = useState(false);
  const safeId = project.id.replace(/[^a-zA-Z0-9-_]/g, "-");
  const toggleId = `project-toggle-${safeId}`;
  const regionDomId = `project-details-${safeId}`;

  return (
    <div
      className="portfolio-project-card"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={project.id} className="portfolio-project-card-inner">
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
            className="portfolio-project-section-label portfolio-project-tech-heading"
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

          <button
            type="button"
            id={toggleId}
            className="portfolio-project-details-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={regionDomId}
            style={{
              color: theme.text,
              borderColor: theme.secondaryText,
              backgroundColor: theme.body,
            }}
          >
            <span className="portfolio-project-details-toggle-text">
              {open
                ? "Hide client brief & work done"
                : "Show client brief & work done"}
            </span>
            <i
              className={`fas fa-chevron-down portfolio-project-chevron${
                open ? " is-open" : ""
              }`}
              aria-hidden
            />
          </button>

          <div
            id={regionDomId}
            role="region"
            aria-labelledby={toggleId}
            aria-hidden={!open}
            className={`portfolio-project-details${open ? " is-open" : ""}`}
          >
            <div className="portfolio-project-details-measure">
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
                &ldquo;{project.clientRequest}&rdquo;
              </p>
              <p
                className="portfolio-project-section-label"
                style={{ color: theme.text }}
              >
                Work done
              </p>
              <ul
                className="portfolio-project-list"
                style={{ color: theme.text }}
              >
                {project.workDone.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
