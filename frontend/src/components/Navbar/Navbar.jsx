import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import {GiWhiteBook} from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand" to="/"><b><GiWhiteBook />ToDo</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item  mx-2 my-1">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item  mx-2 my-1">
          <Link class="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li class="nav-item button-nav mx-2 my-2">
          <Link class="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
        </li>
        <li class="nav-item button-nav mx-2 my-2">
          <Link class="nav-link active" aria-current="page" to="/signin">Sign In</Link>
        </li>
         <li class="nav-item button-nav mx-2 my-2">
          <Link class="nav-link active" aria-current="page" to="/">Log Out</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">
            <img className="img-fluid user-png" 
            src="user.png" alt="/"/></Link>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar