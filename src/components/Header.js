import React, { Component } from "react";

class Header extends Component{
    render(){
        return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container p-0 d-flex align-items-center justify-content-between position-relative">
            <div className="d-flex align-items-center">
                <a className="navbar-brand" href="#">
                    <img src="http://www.whitepanda.in/img/full_logo_white.png" height="30" alt="" />
                </a>
            </div>
            
        </div>
    </nav>
    }
}
    
    export default Header;