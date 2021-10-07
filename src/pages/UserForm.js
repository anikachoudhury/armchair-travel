import React, { Component } from 'react'

export class UserForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div>
                <form>
                    <label>What language?</label><br/>
                    <input placeholder="Enter a country" type="text" id="travel" name="travel" onChange={handleChange('country')} defaultValue={values.country}></input>
                    <button label="continue" onClick={this.continue}>Continue</button>
                </form>
            </div>
        )
    }
}

export default UserForm
