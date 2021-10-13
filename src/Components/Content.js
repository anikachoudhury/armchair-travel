import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Movies from '../Pages/Movies/FetchMovies';
import Recipes from '../Pages/Meals/FetchMeals';
import Books from '../Pages/Books';
import Login from '../Pages/SignInSignUp';
import SignUp from '../Pages/SignUpPage';
import ChatForum from '../Pages/Chatforum';
import MusicContainer from '../MusicComponents/MusicContainer';
import Homepage from '../Pages/Homepage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function Content() {

    return (
        <Router>
            <div id="content">
                <Navbar />

                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signUp" component={SignUp} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/books" component={Books} />
                        <Route path="/music" component={MusicContainer} />
                        <Route path="/recipes" component={Recipes} />
                        <Route path="/chatforum" component={ChatForum} />
                    </Switch>
                </AnimatePresence>

                <Footer />
            </div>
        </Router>
    )
}


export default Content;

