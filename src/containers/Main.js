import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
