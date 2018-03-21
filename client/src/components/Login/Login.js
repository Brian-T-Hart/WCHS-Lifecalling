import React, { Component } from 'react';
import API from "../../utils/API";

class Login extends Component {

    handleClick = event => {
        event.preventDefault();
        console.log("this ", this);
        console.log("event ", event);
        API.testCall({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log("res..Login.js: ", res.data, this.props);  
            })
            .catch(err => console.log(err));
    };

    handleLogin = event => {
        event.preventDefault();
        console.log("Handling login..Login.js");
        API.loginAccount({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log('response from login');
            })
            .catch(err => console.log(err));
        }

    constructor(props) {
        super(props);
        this.state = {
            username: "bdoggincali",
            password: "test"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row container">
                    <button className="btn btn-primary" onClick={this.handleLogin} >Sign In with Google</button>
                </div>
                <div className="row container">
                    <button className="btn btn-primary" onClick={this.handleClick} >Test Button</button>
                </div>
                <div className="row container">
                    {this.state.username}
                </div>
            </div>

        )
    }
}

export default Login;