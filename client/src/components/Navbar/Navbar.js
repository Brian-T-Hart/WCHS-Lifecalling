import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    
    handleLogOut() {
        localStorage.clear("lifeCallingId");
        localStorage.clear("lifeCallingUsername");
    }

    render() {
        return (
            <div>
                <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-light">
                    <a id="navTitle" href="/dashboard"><img id="navLogo" src="../../images/lifeCallingLogo.png" alt="" />LIFE CALLING</a>
                    <ul id="navDropdownMenu" className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.props.username}</a>
                            <div id="navDropdown" className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/dashboard">Dashboard</a>
                                <a className="dropdown-item" href="/login">Login</a>
                                <a className="dropdown-item" href="/register">Register</a>
                                <a className="dropdown-item" href="/login">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;