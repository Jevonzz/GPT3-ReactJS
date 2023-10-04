import React from "react";

// Containers
import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";

// Components
import { CTA, Brand, Navbar } from "./components";

//CSS for App.js
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
