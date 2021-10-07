import React from "react";
import './SignInPage.css';

class SignInPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="welcomeBox1"></div>
                <div className="welcomeBox2"></div>
                <div className="welcomeBox3"></div>
                <div className="welcomeBox4"></div>
            <div className="welcomeBox5">
                <h1 className="Welcome">Welcome</h1>
                </div>
                <form action="#">
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
                        <button className="Sign-In-Button" type="SignIn-User">LOG IN</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default SignInPage