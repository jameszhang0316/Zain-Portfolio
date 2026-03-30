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
          <p
            className="skills-intro-github subTitle"
            style={{ color: theme.secondaryText }}
          >
            {skillsIntro.githubBio}
          </p>
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
