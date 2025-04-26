import React from 'react';




const Projects = ({image , title , projectRepo}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
    <a href={projectRepo} className="btn btn-primary">Project Repository</a>
  </div>
</div>


    )
}

export default Projects;
  