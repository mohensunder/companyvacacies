import React from "react";
import './layout.css'
import skill from './skills.jpg'
import man from './manak.jpg'
import mai from './manbk.jpg'
import maj from './Janani-Iyer.jpg'
import mak from './mandk.jpg'
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
            <div class="ita dropdown-center">
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Experience
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    HTML CSS
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Bangalore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    UI/UX Designer
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Gender
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
  <button class="itb btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Age
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
            </div>
            <div className="container-fluid">
              <div className="row">
            <div class="live card col-lg-3" >
              <img src={ man } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Akshay</h5>
              <p class="card-text">UI Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>

            <div class="live card col-lg-3" >
              <img src={ mai } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Ram</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
            
            <div class="live card col-lg-3" >
              <img src={ maj } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Janani</h5>
              <p class="card-text">UI/UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>

            <div class="live card col-lg-3" >
              <img src={ mak } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Kishore</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
            </div>
            </div>

          <div className="container-fluid">
          <div className="row">
              <div class="live card col-lg-3" >
              <img src={ man } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Kumar</h5>
              <p class="card-text">UI Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ mai } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Ajay</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ maj } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Anupriya</h5>
              <p class="card-text">UI/UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ mak } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Srikanth</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
          </div>
          </div>

          <div className="container-fluid">
          <div className="row">
          <div class="live card col-lg-3" >
              <img src={ man } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Kumar</h5>
              <p class="card-text">UI Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ mai } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Ajay</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ maj } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Anupriya</h5>
              <p class="card-text">UI/UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>
          
            <div class="live card col-lg-3" >
              <img src={ mak } class="card-img-top" />
              <div class="card-body text-center">
              <h5 class="card-title">Srikanth</h5>
              <p class="card-text">UX Developer</p>
              <button class="butn">VIEW</button>
              </div>
            </div>


          </div>
          </div>


        </div>
        </div>



        </>
    );
}