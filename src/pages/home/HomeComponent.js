import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import ProjectsSection from "../../containers/projects/ProjectsSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

function Home(props) {
  const location = useLocation();

  useEffect(() => {
    const id = (location.hash || "").replace(/^#/, "");
    if (!id) return undefined;
    const el = document.getElementById(id);
    if (!el) return undefined;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <div>
      <Header theme={props.theme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <ProjectsSection theme={props.theme} />
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Home;
