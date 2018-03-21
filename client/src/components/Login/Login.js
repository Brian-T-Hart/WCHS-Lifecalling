import React, { Component } from 'react';
import API from "../../utils/API";
import decode from 'jwt-decode';

class Login extends Component {

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLogin = event => {
        event.preventDefault();
        console.log("Handling login..Login.js");
        API.loginAccount({
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                // console.log('response from login ', res);
                console.log("res..Login.js: ", res.data.token, this.props);
                // set token to local storage
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.username);
                // decode token
                const decoded = decode(res.data.token);
                var sub = decoded.sub;
                console.log('sub: ' + sub);
                localStorage.setItem('student_id', sub);
                console.log("decoded token giving student_id and timestamp: ", decoded);
                // window.location = '/dashboard';
            })
            .catch(err => console.log(err));
        }

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
                <div className="row">
                    <div className="col-md-4">
                        <form id="login-form" >
                            <h2> Sign In </h2>

                            <input type="text" name="username" id="username" tabIndex="1" placeholder="Username *" value={this.state.username} onChange={this.handleInputChange} autoComplete="username" required></input>
                            <input type="password" name="password" id="password" tabIndex="2" placeholder="Password *" value={this.state.password} onChange={this.handleInputChange} autoComplete="current-password" required></input>
                                
                            <button type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" onClick={this.handleLogin}>Log In</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;