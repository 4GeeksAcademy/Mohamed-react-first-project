import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    
   <Navbar/>
   <Hero />
   {/* <Stack/> */}
   <Projects/>
   <Footer/>
   
  </React.StrictMode>,
)
