import React from 'react'
import './home.css';

import logo from '../picture/logo.png';

export default function home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ms-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='abtImg brand' src={logo} alt="Page-logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " href="#" tabindex="-1">Disabled</a>
        </li>
      </ul>
      <form className="d-flex me-5">
        <button className="btn1 text-black me-3" type="submit">Sign In</button>
        <button className="btn2 text-white" type="submit">Start Your Free Trial</button>
      </form>
    </div>
  </div>
</nav>
  )
}
