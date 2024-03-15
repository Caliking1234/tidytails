import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Volunteer from "./component/Volunteer";
import Home from "./component/Home";
import { Component } from "react";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/Log" element={<Log />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
