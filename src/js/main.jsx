import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import card from "../img/card.png";
import card1 from "../img/excuse.png";

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Projects from './components/Projects';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    
   <Navbar/>
   <Hero />
  
   <div className="projects-container">
      <Projects
        image={card}
        title="Random Card Generator"
        projectRepo="https://github.com/4GeeksAcademy/Random-Card-Generator-project"
      />
      <Projects
        image={card1}
        title="Random Excuse Generator"
        projectRepo="https://github.com/4GeeksAcademy/Mohamed-excuse-generator"
      />
      <Projects
        image={card}
        title="Weather App"
        projectRepo="https://github.com/4GeeksAcademy/Weather-App"
      />
      <Projects
        image={card}
        title="E-Commerce Website"
        projectRepo="https://github.com/4GeeksAcademy/E-Commerce-Website"
      />
      <Projects
        image={card}
        title="E-Commerce Website"
        projectRepo="https://github.com/4GeeksAcademy/E-Commerce-Website"
      />
    </div>
   <Footer/>
   
  </React.StrictMode>,
)
