import React from 'react';


const Projects = () => {
    return(
        <div>
            <h1 className="projects-tittle">My Projects</h1>
            <div className="projects-container">
                <div className="card-project">
                    <img className="project-image" src="https://media.geeksforgeeks.org/wp-content/uploads/20240409180552/All-Phases.webp"/>
                    <h3>Project 1</h3>
                    
                </div>
                <div className="card-project">
                    <h3>Project 2</h3>
                </div>
                <div className="card-project">
                    <h3>Project 3</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects;
  