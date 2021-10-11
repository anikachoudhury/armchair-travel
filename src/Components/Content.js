import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatforum from '../Pages/Chatforum';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

function Content(){

    return (
    <Router>
    <div id="content">
    <Navbar/>

    <AnimatePresence>
    <Switch> 
        {/* <Route exact path="/" component={Login}/>
        <Route path="//movies" component={Movies}/>
        <Route path="/films" component={Films}/>
        <Route path="/music" component={Music}/>
        <Route path="/recipes" component={Recipes}/> */}
        <Route path="/chatforum" component={Chatforum}/>
    </Switch>
    </AnimatePresence>

    <Footer/>
    </div> 
    </Router>
    )
}

export default Content;

