import React from 'react'
import {IoMdMail} from "react-icons/io"
import {HiOutlineClock} from "react-icons/hi"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">
        <img src="Assets/logo-img.png" alt="not found" className='img-fluid'
        width={"80px"} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Start
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
            <Link to="/roster">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Roster
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
            </Link>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Employee
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reports
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lohn
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
            <Link to="/">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Ideas</a>
        </li>
            </Link>
      </ul>
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item d-flex ">
      <HiOutlineClock color='white' className='mt-2' size={"25px"}/> &nbsp;
          <a className="nav-link active " aria-current="page" href="/">
            {/* <img src="Assets/clock.svg" alt="clock" className='img-fluid' width={"25px"} style={{fill:"7128558"}} /> &nbsp; */}
            28 trial days left
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Help
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <IoMdMail size={"20px"} />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider dark"/></li> */}
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hassan
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item dark" href="/">Action</a></li>
            <li><a className="dropdown-item dark" href="/">Another action</a></li>
            <li><a className="dropdown-item dark" href="/">Something else here</a></li>
          </ul>
          
        </li>
        
      </ul>
        
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header