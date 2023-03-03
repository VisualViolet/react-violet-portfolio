import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <h2>Navbar</h2>
      <hr />
        <Routes>
          <Route path="/" element = {<About/>}/>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/resume" element = {<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
