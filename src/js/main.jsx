import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import card from "../img/card.png";
import excuse from "../img/excuse.png";
import conditional from "../img/conditional-card.png";
import post from "../img/instegram-post.png";

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    
   <Navbar/>
   <Hero />
   {/* <Stack/> */}
    <Technologies />
   
  
   <div className="projects-container">
      <Projects
        image={card}
        title="Random Card Generator"
        projectRepo="https://github.com/4GeeksAcademy/Random-Card-Generator-project"
      />
      <Projects
        image={excuse}
        title="Random Excuse Generator"
        projectRepo="https://github.com/4GeeksAcademy/Mohamed-excuse-generator"
      />
      <Projects
        image={conditional}
        title="Conditional Card"
        projectRepo="https://github.com/4GeeksAcademy/Weather-App"
      />
      <Projects
        image={post}
        title="Instagram Post"
        projectRepo="https://github.com/4GeeksAcademy/E-Commerce-Website"
      />
      
    </div>
   <Footer/>
   
  </React.StrictMode>,
)
