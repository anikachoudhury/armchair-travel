import React from 'react'
import './SignInSignUp.css'
import {Link} from 'react-router-dom';

class SignInSignUp extends React.Component {

    render() {
        return (
            <div className="SignInSignUp">
                <section>
                    <div className="container" id="container">
                        <div className="form-container sign-in-container">
                            <form className="SIform" action="#">
                                <header className="SIheading">Welcome Back</header>
                                <h1>Sign in</h1>
                                <span className="SIprompt">to use your account</span>
                                <div className="inputbars">
                                    <input className="SIfields" type="email" placeholder="Email" />
                                    <input className="SIfields" type="password" placeholder="Password" />
                                </div>
                                <a href="#">Forgot your password?</a>
                                <button className="signIn">Sign In</button>
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
            </div>
        )
    }
}

export default SignInSignUp