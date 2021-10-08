import React from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import backgroundImage from '../Resources/foodie-culture-society.jpeg'

export default function Home() {
    return (

        <div className="home-container">
            <section>
                <div className="background" >
                    <SignInPage />
                {/* <SignUpPage /> */}
                </div>
            </section>

        </div>
}