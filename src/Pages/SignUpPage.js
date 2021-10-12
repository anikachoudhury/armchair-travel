import React from "react";
import './SignUpPage.css';

class SignUpPage extends React.Component {
  
    render() {
        return (
            <div className="SignUp">
                <section>
                    <div className="SignUpContainer">
                        <h1 className="CreateAccount">Create Account</h1>
                    <form className="SignUpForm" action="#">
                        <div className="SignUpInput">
                            <label className="Sign-UpDetails">
                                Email
                                <span className="SignUpcontainer">
                                    <input type="email" name="email" id="email" placeholder="Enter your email..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                First name
                                <span className="SignUpcontainer">
                                    <input type="text" name="username" id="firstname" placeholder="Enter first name..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                Surname
                                <span className="SignUpcontainer">
                                    <input type="text" name="surname" id="surname" placeholder="Enter surname..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                Password
                                <span className="SignUpcontainer">
                                    <input type="password" name="password" id="password" placeholder="Enter a password..." />
                                </span>
                            </label>
                            <button className="Sign-Up-Button" type="Create-User">Create Account</button>
                        </div>
                    </form>
                </div>
                </section>
            </div>
        )

    }
}

export default SignUpPage