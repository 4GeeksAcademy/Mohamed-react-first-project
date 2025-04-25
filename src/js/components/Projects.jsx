import React from 'react';
import card from "../../img/card.png";



const Projects = () => {
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={card} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Random Card Generator</h5>
    <div class="hstack gap-3">
  <div class=" p-2">HTML</div>
  <div class="p-2">CSS</div>
  <div class="p-2">JS</div>
</div>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default Projects;
  