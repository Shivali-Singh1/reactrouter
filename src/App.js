import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
