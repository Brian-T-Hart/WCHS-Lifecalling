import React, { Component } from 'react';
import API from "../../utils/API";

class Register extends Component {

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRegister = event => {
        event.preventDefault();
        console.log("Handling register..Register.js");
        API.registerAccount({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
            // .then(res => console.log("you have registered!"))
            .then(res => window.location = '/login')
            .catch(err => console.log(err));

        //Clear form data after submit
        this.setState({
            username: "",
            password: "",
            email: ""
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row container">
                    {this.state.username}
                </div>
                <div className="row container">
                    {this.state.email}
                </div>
                {/* <div className="row container">
                    {this.state.password}
                </div> */}
                <div className="row">
                    <div className="col-md-4">

                        <form id="register-form" >
                            <h2> Create an Account </h2>

                            <input type="text" name="username" id="username" tabIndex="1" placeholder="Username *" value={this.state.username} onChange={this.handleInputChange} required>
                            </input>
                            <input type="email" name="email" id="email" tabIndex="1" placeholder="Email Address *" value={this.state.email} onChange={this.handleInputChange} autoComplete="email" required>
                            </input>
                            <input type="password" name="password" id="password" tabIndex="2" placeholder="Password *" value={this.state.password} onChange={this.handleInputChange} autoComplete="new-password" required>
                            </input>
                            <input type="password" name="passwordConfirm" id="confirm-password" tabIndex="2" placeholder="Confirm Password *" value={this.state.passwordConfirm} onChange={this.handleInputChange} autoComplete="new-password" required>
                            </input>
                                    <button type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" onClick={this.handleRegister}>Register</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Register;