import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Tech,
  Works,
  LetsConnect,
} from "./components/index.js";
import { styles } from "./styles.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />

        <About />
        <Works />

        <div className="relative z-0">
          <LetsConnect />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
