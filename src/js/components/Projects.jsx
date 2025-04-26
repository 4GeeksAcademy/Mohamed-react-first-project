import React from 'react';
import card from "../../img/card.png";



const Projects = () => {
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={card} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Random Card Generator</h5>
    
    <a href="#" className="btn btn-primary">Project Repository</a>
  </div>
</div>
    )
}

export default Projects;
  