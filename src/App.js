import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import Home from "./pages/Home";
import Tools from "./pages/Tools";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
class App extends Component {
  render() {
    return (
      <PosedRouter>
        <Home path="/" />
        <Tools path="tools" />
      </PosedRouter>
    );
  }
}

export default App;
