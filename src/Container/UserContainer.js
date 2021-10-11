import React from "react";
import SignUpPage from "../Pages/SignUpPage";


class UserContainer extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            users: []
        }

        this.addNewUsers = this.addNewUsers.bind(this);
    }

    componentDidMount(){
        this.getUsersData();
    }


    addNewUsers(newUsers){
        fetch("http://localhost:8080/api/users/addUser",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUsers)
        })
        const updatedUsers = [...this.state.users, newUsers];
        this.setState({ users: updatedUsers });
    }

    render(){
        return (
            <>
                <SignUpPage handleUsersSubmission={this.addNewUsers}/>
            </>
        )
    }

}

export default UserContainer;
