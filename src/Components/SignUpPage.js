import React from "react";
import './SignUpPage.css';

class SignUpPage extends React.Component {

    render() {
        return (
            <div className="SignUpcontainer">
                <div className="Box1SU"></div>
                <div className="Box2SU"></div>
                <div className="Box3SU"></div>
                <div className="Box4SU"></div>
                <div className="Box5SU">
                    <h1 className="CreateAccount">Create Account</h1>
                </div>
                <form action="#">
                    <div className="SignUpInput">
                        <label className="Sign-UpDetails">
                            Email
                            <span className="SignUpcontainer">
                                <input type="email" name="email" id="email" placeholder="Enter your email..." />
                            </span>
                        </label>
                        <label className="Sign-UpDetails">
                            Username
                            <span className="SignUpcontainer">
                                <input type="text" name="username" id="username" placeholder="Enter a username..." />
                            </span>
                        </label>
                        <label className="Sign-UpDetails">
                            Password
                            <span className="SignUpcontainer">
                                <input type="text" name="password" id="password" placeholder="Enter a password..." />
                            </span>
                        </label>
                        <button className="Sign-Up-Button" type="Create-User">Create Account</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default SignUpPage