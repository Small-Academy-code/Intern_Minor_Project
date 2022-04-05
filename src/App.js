import React from "react"
import "./App.css"
import Logo from "./logo.png"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Gyms from "./Gyms"
import Membership from "./Membership"
import Gallery from "./Gallery"
import FitnessInstitute from "./FitnessInstitute"
function App() {
  function removeTopSec() {
    document.getElementById("main_sec").style.display = "none";
  }
  return (
    <Router>
      <div className="app">
        <nav>
          <div className="contact">
            <div className="contact_phone">Phone No. :+91 73311912</div>
            <div className="contact_email">E-Mail : silver.gym@gmail.com</div>
          </div>
          <div className="nav_container">
            <Link to="/" onClick={() => {
              document.getElementById("main_sec").style.display = "block"
            }}><img src={Logo} className="logo" /></Link>
            <Link to="/Gyms" className="link" onClick={removeTopSec}>Gyms</Link>
            <Link to="/Membership" className="link" onClick={removeTopSec}>Membership</Link>
            <Link to="/Gallery" className="link" onClick={removeTopSec}>Gallery</Link>
            <Link to="/FitnessInstitute" className="link" style={{
              marginRight:"50px"
              }}>Fitness Institute</Link>
          </div>
        </nav>
        <main id="main_sec">
          <div className="title">SILVER GYM</div>
          <div className="container">
            <div className="no_gyms">118 Gyms</div>
            <div className="no_cities">27 Cities</div>
            <div className="no_states">12 States</div>
            <div className="no_country">1 Country</div>
          </div>
        </main>
      </div>
      <Routes>
        <Route element={App} path="/" />
        <Route element={<Gyms />} path="/Gyms" />
        <Route element={<Membership />} path="/Membership" />
        <Route element={<Gallery />} path="/Gallery" />
        <Route element={<FitnessInstitute />}  path="/FitnessInstitute"/>
      </Routes>
    </Router>
  )
}

export default App