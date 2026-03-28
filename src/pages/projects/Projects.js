import React from "react";
import { Redirect } from "react-router-dom";

/** Legacy URL: single scrollable page lives at /home; jump to #projects */
export default function Projects() {
  return <Redirect to={{ pathname: "/home", hash: "projects" }} />;
}
