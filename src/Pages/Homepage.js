import React from 'react';
import './Homepage.css';
import {Link} from 'react-scroll'
import {motion} from 'framer-motion';

function Homepage(){

function handleClick(){
    document.getElementsByClassName('homeSection')[0].style.display = 'none';
}

    return (

        <motion.div className = 'backgroundcolor' 
        exit={{opacity: 0}} 
        animate={{opacity: 1}} 
        initial={{opacity: 0}}> 
        <body>

        <section className="homeSection">

        <motion.div className="homeLogo"
        animate={{scale:[1, 1.4, 1.4, 1, 1],
        rotate: [0,0, 370, 370, 0]}}
        transition={{duration: 3}}>
        <img className="Logo" src='./images/FinalLogo.png' width="500" alt="logo"/>
        </motion.div>

        <div className="scrollDownButton">
        <Link to="world" spy={true} smooth={true} className="homePageLink">CLICK TO SCROLL</Link>
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
        <Link to="content" className="toContent" spy={true} smooth={true} onClick={handleClick}>CLICK TO ENTER A WHOLE NEW WORLD</Link>
        </div>

        </div>
        </section>
        </body>
        </motion.div>
    );
    
}

export default Homepage;