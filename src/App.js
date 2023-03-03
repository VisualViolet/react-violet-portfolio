import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Header from "./Header";
import Footer from "./Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <hr />
        <Routes>
          <Route path="/" element = {<About/>}/>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/resume" element = {<Resume/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;
