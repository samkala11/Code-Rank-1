import React from 'react';
// import { Link } from 'react-router-dom'
import logo from './../../logo.png';
import demouser from '../../demo-user.png'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        // debugger
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
               
                <div>
                    <div id="navigation-bar">
                        <a href="#"><img id="logo" src={logo} alt=""></img></a>
                            <div className="dropdown">
                            <button className="dropbtn"><a href="#dropdown"><img id="profile-picture" src={demouser} alt=""></img></a></button>
                                    
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                <a id="logout" onClick={this.logoutUser}>Logout</a>
                                    </div>
                            </div>            
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div id="navigation-bar">
                        <a href="#"><img id="logo" src={logo} alt=""></img></a> 
                    </div>
                </div>
        
            );
        }
    }

    footer(){
        
    }

    render() {
        return (
            <div>
                {/* <h1>Chirper</h1> */}
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;