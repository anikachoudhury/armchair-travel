import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <header className="nav-container">

    <div className="navbrand nav-item">
      <Link to="/logIn">
      <li><img src='./images/navbarlogo.png' width="100" alt="logo" /></li>
      </Link> 
    </div>

    <div className="navlinks nav-item">
      <Link to="/movies">
      <li>MOVIES</li>
      </Link>

      <Link to="/books">
      <li>BOOKS</li>
      </Link>
      
      <Link to="/music">
      <li>MUSIC</li>
      </Link>
      
      <Link to="/recipes">
      <li>RECIPES</li>
      </Link>
      
      <Link to="/chatforum">
      <li>CHATFORUM</li>
      </Link>

    </div>

    <div className="nav-item logout">
    <Link to="/logIn">
    <button className="logoutButton">LOGOUT</button>
    </Link>
    </div>

    </header>
    );
    }
    
    export default Navbar;
