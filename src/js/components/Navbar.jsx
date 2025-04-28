import React from 'react'
import ReactDOM from 'react-dom/client'

const Navbar =() => {

return (
<nav class="navbar navbar-expand-lg ">
  <div class="wrapper container-fluid">
    <a style={{color: "white"}} class="navbar-brand" href="#"> My Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a style={{color: "white"}} class="nav-link active" aria-current="page" href="#">Technologies</a>
        </li>
        <li class="nav-item">
          <a  style={{color: "white"}} class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a style={{color: "white"}} class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
);

}

export default Navbar;
