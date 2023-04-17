import React from "react";
import './layout.css'
import skill from './skills.jpg'


export function Card(){
    return(
        <>
        <div className="container-fluid">
        <div className="row">
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
        <img src={ skill } height="50px"/>
        </li>
        <li class="nav-item">
        <button class="btn bg-danger text-light" type="submit" bg-secomdary>Find Candidates</button>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Find job</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active text-light" aria-current="page" href="#">Find Companies</a>
          
        </li>
       
      </ul>
            
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Login" aria-label="Search"/>
        <button class="btn bg-danger text-light" type="submit" bg-secomdary>Register</button>
      </form>
    </div>
  </div>
</nav>
           <div className="it">
            <div className="itc">
                <h2>Find the Candidates as per your requirements</h2>
                
                <input type="text" placeholder="job title / Keyword | Add Country / City"/>
                <button>Search</button>
                </div>
            </div>

            <div>
            <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Experience
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    HTML CSS
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Bangalore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    UI/UX Designer
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Gender
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Age
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
            </div>

        </div>
        </div>



        </>
    );
}