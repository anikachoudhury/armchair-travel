import React from 'react';
import './Homepage.css';
import {Link} from 'react-scroll'

function Homepage(){

    return (

        <div className = 'backgroundcolor'> 
        <body>

        <section className="homeSection">

        <div className="homeLogo">
        <img className="Logo" src='./images/FinalLogo.png' width="500" alt="logo" />
        </div>

        <div className="scrollDownButton">
        <button><Link to="world" spy={true} smooth={true}>CICK TO SCROLL</Link></button>
        </div>

        <div className="homeIntro">

        <div id="world">
        <img className="world" src='./images/FinalHome.png' width="500" alt="logo" />
        </div>

        <div>
        <p className="intro">You'll never be the same, having seen the moon, the stars, and the sunshine in different places. 
        Whether you are reading your favourite piece of African literature or watching a movie set in the Sahara Desert, 
        the moon doesn't change shape or shine any differently, but the lens with which you view it does. 
        Join us to explore the world in the comfort of your armchair.</p>
        </div>

        <div className="quoteBackground">
        <h1 className="quote">“Oh the places you’ll go...”</h1>
        </div>

        <div className="firstHomeButton">
        <button><Link to="content" spy={true} smooth={true}>CLICK TO ENTER A WHOLE NEW WORLD</Link></button>
        </div>

        </div>
        </section>
        </body>
        </div>
    );
    
}

export default Homepage;