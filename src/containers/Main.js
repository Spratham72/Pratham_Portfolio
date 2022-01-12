import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                render={(props) => {
                  return (
                    <>
                      <Home {...props} theme={this.props.theme} />
                      <Projects {...props} theme={this.props.theme} />
                      <Contact {...props} theme={this.props.theme} />
                    </>
                  );
                }}
              />
              <Route
                path="/home/contact"
                render={(props) => {
                  return (
                    <>
                      <Contact {...props} theme={this.props.theme} />
                    </>
                  );
                }}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
