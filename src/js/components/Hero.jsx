import React from "react";
import profilePicture from "../../img/pic.jpg"; 


const Hero = () =>{
    return (
        <div className="hero-section">
            <div className="pic-container">
                <img className ="profile-picture" src ={profilePicture}/>

            </div>
         <h1 className="hero-tittle"> Hi, I'm a Web Designer </h1>
        </div>
    )
}

export default Hero;