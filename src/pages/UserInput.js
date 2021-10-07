import React, { Component } from 'react';
import RenderCulture from './RenderCulture';
import UserForm from './UserForm';

export class UserInput extends Component {

    state = {
        step: 0,
        country: ''
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { country } = this.state;
        const values = { country }

        switch(step) {
            case 1:
                return (
                    <RenderCulture 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default: 
                return (
                    <UserForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }

    }
}

export default UserInput;
