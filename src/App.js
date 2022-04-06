import React from "react"
import "./App.css"
import Logo from "./logo.png"
import Menu from "./menu_bar.png"
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
            <div className="contact_phone">+91 12121212</div>
            <div className="contact_email">silver.gym@gmail.com</div>
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
        <div className="responsive_nav">
          <div className="contact">
            <div className="contact_phone">+91 12121212</div>
            <div className="contact_email">silver.gym@gmail.com</div>
          </div>
          <div className="nav_top" style={{display:"flex"}}>
            <Link to="/" onClick={() => {
              document.getElementById("main_sec").style.display = "block"
            }} style={{
              textDecoration:"none"
              }}><div className="responsive_logo">
                <div className="responsive_logo_text">Silver Gym</div>
              </div>
            </Link>
            <img src={Menu} className="menu_bar" onClick={() => {
              const x = document.getElementById("responsive_sections");
              if (x.style.display === "block") {
                x.style.display = "none";
              }
              else {
                x.style.display = "block";
              }
            }} />
          </div>  
          <br />
          <div className="responsive_sections" id="responsive_sections">
            <Link to="/Gyms" className="responsive_link" onClick={() => {
              document.getElementById("main_sec").style.display = "none";
              document.getElementById("responsive_sections").style.display = "none";
            }}>Gyms</Link> <br /> <br />
            <Link to="/Membership" className="responsive_link" onClick={() => {
              document.getElementById("main_sec").style.display = "none";
              document.getElementById("responsive_sections").style.display = "none";
            }}>Membership</Link> <br /> <br />
            <Link to="/Gallery" className="responsive_link" onClick={() => {
              document.getElementById("main_sec").style.display = "none";
              document.getElementById("responsive_sections").style.display = "none";
            }}>Gallery</Link> <br /> <br />
            <Link to="/FitnessInstitute" className="responsive_link" onClick={() => {
              document.getElementById("main_sec").style.display = "none";
              document.getElementById("responsive_sections").style.display = "none";
            }}>Fitness Institute</Link>  <br /> <br />
          </div>
          </div>
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