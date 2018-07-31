import React, { Component } from "react";
import {
  NavBar,
  logo,
  Logo,
  LeftSide,
  RightSide,
  FeaturesContainer,
  LanguageContainer,
  AboutUs,
} from "..";

export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="top-wrapper">
          <div className="top">
            <div className="nav-container">
              <Logo src={logo} />
              <NavBar />
            </div>
            <div className="center">
              <RightSide />
              <LeftSide />
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <FeaturesContainer />
        </div>
        <div className="languages-wrapper" id="languages">
          <LanguageContainer />
        </div>
        <div className="about-us-wrapper">
          <AboutUs />
        </div>
      </div>
    );
  }
}
