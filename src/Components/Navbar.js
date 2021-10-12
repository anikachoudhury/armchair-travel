import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <header className="nav-container">

    <div className="navbrand">
      <Link to="/">
      <li><img src='./images/navbarlogo.png' width="150" alt="logo" /></li>
      </Link> 
    </div>

    <div className="navlinks">
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

      <Link to="/logIn">
      <li>LOG IN</li>
      </Link>

      <Link to="/signUp">
      <li>SIGN UP</li>
      </Link>
    </div>

    </header>
    );
    }
    
    export default Navbar;