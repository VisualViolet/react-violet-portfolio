import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App content">
      <BrowserRouter>
      <Header />
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
