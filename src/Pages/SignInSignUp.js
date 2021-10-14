import React from 'react';
import './SignInSignUp.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import pageVariants from './../Components/pageVariants';
import pageTransition from './../Components/pageTransition';

class SignInSignUp extends React.Component {

    state={
        email: '',
        password: ''
    }

handleChange = (e) => {
const {name, value} = e.target
this.setState({[name]:value})

}


handleSubmit = (e) => {
e.preventDefault()
}


    render() {
        return (
            <motion.div className="SignInSignUp" 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>

                <section>
                    <div className="container" id="container">
                        <div className="form-container sign-in-container">
                            <form className="SIform" action="#" onSubmit={this.handleSubmit}>
                                <header className="SIheading">Welcome Back</header>
                                <h1>Sign in</h1>
                                <span className="SIprompt">to use your account</span>
                                <div className="inputbars">
                                    <input className="SIfields" type="email" placeholder="Email" required onChange={this.handleChange} />
                                    <input className="SIfields" type="password" placeholder="Password" required onChange={this.handleChange}/>
                                </div>
                                <a href="#">Forgot your password?</a>
                                <Link to = "/chatForum">
                                <button className="signIn" onSubmit={this.handleSubmit}>Sign In</button>
                                </Link>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className="Account_SU">Hello, Friend!</h1>
                                    <h4>Don't have an account?</h4>
                                    <p className="SUdesc">Enter your personal details and start your journey with us</p>
                                    <Link to = "/signUp">
                                        <button className="signUp" id="signUp">Sign Up</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        )
    }
}

export default SignInSignUp