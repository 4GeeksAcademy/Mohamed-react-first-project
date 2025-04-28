import React from 'react';




const Projects = ({image , title , projectRepo}) => {
    return(
      
        
        <div className="card" style={{width: "18rem"}}>
         
  <img src={image} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
    <a href={projectRepo} className="btn ">Project Repository</a>
  </div>
</div>


    )
}

export default Projects;
  