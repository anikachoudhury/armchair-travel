import React from "react";
import {motion} from 'framer-motion';
import axios from "axios";
// import {Link} from 'react-router-dom';
import './SignUpPage.css';


class SignUpPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(response.data)
            })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // when the text box changes, it will allow it
        })
    }

    handleUserSubmission = (e) => {
        e.preventDefault() //stopped auto refresh when pressing submit
        axios.post('http://localhost:8080/api/users/addUser', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <motion.div className="SignUp"
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity: 0}}>
              <section>
                <div className="SignUpContainer">
                    <h1 className="CreateAccount">Create Account</h1>
                    <form className="SignUpForm" action="#" onSubmit={this.handleUserSubmission}>
                        <div className="SignUpInput">
                            <label className="Sign-UpDetails">
                                First Name
                                <span className="SignUpcontainer">
                                    <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter your First Name..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                Last Name
                                <span className="SignUpcontainer">
                                    <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Enter your Last Name..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                Email
                                <span className="SignUpcontainer">
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email..." />
                                </span>
                            </label>
                            <label className="Sign-UpDetails">
                                Password
                                <span className="SignUpcontainer">
                                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter a password..." />
                                </span>
                            </label>
                                <button className="signUp" id="signUp">Create Account</button>
                        </div>
                    </form>
                </div>
            </section>
            </motion.div>
        )

    }
}

export default SignUpPage