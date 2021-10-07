import React from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

export default function Home {
    return (

        <div className="home-container">
            <section>
                <div className="background" >
                <SignInPage />
                <SignUpPage />
                </div>
            </section>

        </div>
}