import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { skillsIntro } from "../../portfolio.js";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {skillsIntro.sectionTitle}
          </h1>
        </Fade>
      </div>
      <div className="skills-intro-block">
        <Fade bottom duration={2000} distance="20px">
          <div
            className="skills-intro-bio-cards"
            style={{ borderColor: theme.secondaryText + "40" }}
          >
            {(skillsIntro.githubBioCards || []).map((card, idx) => (
              <div
                key={idx}
                className="skills-intro-bio-card"
                style={{
                  backgroundColor: theme.headerColor,
                  borderColor: "rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  className="skills-intro-bio-card-label"
                  style={{ color: theme.text }}
                >
                  {card.label}
                </div>
                <div className="skills-intro-bio-pills">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="skills-intro-bio-pill"
                      style={{
                        color: theme.text,
                        backgroundColor: theme.body,
                        borderColor: "rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {skillsIntro.paragraphs.map((p, i) => (
            <p
              key={i}
              className="skills-intro-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {p}
            </p>
          ))}
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
