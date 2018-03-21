import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="mainNavbar" className="navbar navbar-default">
                        <div className="col-md-2 navbar-header">
                            <img id="navLogo" src="../../images/lifeCallingLogo.png" alt="" />
                        </div>
                        <div className="col-md-8 navbar-header">
                            <h1 id="navbarTitle">WCHS LIFE-CALLING</h1>
                        </div>
                    <div className="col-md-2 navbar-header">
                        <img id="navLogo" src="../../images/lifeCallingLogo.png" alt="" />
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar;