import React from "react";
import './SignInPage.css';
import backgroundImage from '../Resources/foodie-culture-society.jpeg'

class SignInPage extends React.Component {

    render() {
        return (
            <div className="SignInPage">
                <section >
                    <div className="container" >
                        <div className="welcomeBox1"><h1 className="Welcome">Welcome</h1></div>
                        {/* <div className="welcomeBox2"></div> */}
                        {/* <div className="welcomeBox3"></div>
                        <div className="welcomeBox4"></div> */}
                        <div className="welcomeBox5">
                        </div>
                        <form className="SignInForm" action="#">
                            <div className="username_passwordInput">
                                <label className="Sign-In">
                                    Username
                                    <span className="containerBox">
                                        <input type="text" name="username" id="username" placeholder="Enter username..." />
                                    </span>
                                </label>
                                <label className="Sign-In">
                                    Password
                                    <span className="containerBox">
                                        <input type="text" name="password" id="password" placeholder="Enter password..." />
                                    </span>
                                </label>
                                <div className="btnstyling">
                                    <button className="Sign-In-Button" type="SignIn-User">LOG IN</button>
                                    <button className="Sign-Up-button" type="Create User">Not registered? Sign up here!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )

    }
}

export default SignInPage

//style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", height: "100vh", width: "100vw", backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}