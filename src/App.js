import React, { Component } from "react";
import SnowStorm from 'react-snowstorm';
import $ from "jquery";

import Navbar from "./component/Navbar";
import TitlesSection from "./section/TitlesSection";
import AboutSection from "./section/AboutSection";
import SkillSection from "./section/SkillSection";

import "./App.css";



class App extends Component {
  render() {
   
    return (
      <div className="App">
        
        <Navbar />
        <TitlesSection />
        <AboutSection />
        <SkillSection />
        <SnowStorm />

      </div>
    );
  }
}

export default App;
