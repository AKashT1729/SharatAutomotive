import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "./components/Button"
import Appointment from "./pages/Appointement";
import Contact from "./pages/Contact";
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/button" element={<Button />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* Add more routes as needed */}
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

