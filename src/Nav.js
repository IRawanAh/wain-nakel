import React, { Component } from 'react';
import './App.css';
import logo from './images/logo-header.png';
class Nav extends Component {
    changeActivePage = ({ currentTarget }) => {
        this.props.activePage(currentTarget.name);
    };
    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg  navbar-dark">
                    <button style={{ color: "white" }}
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <a className="nav-link" name="sign-in" onClick={this.changeActivePage}>تسجيل الدخول</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" onClick={this.changeActivePage} name="sign-up" > إنشاء حساب</a></li>
                        </ul>
                    </div>
                    <a>
                        <img className="nav navbar-nav " name="home" onClick={this.changeActivePage} src={logo}></img>
                    </a>
                </nav>

            </div >
        );
    }
}

export default Nav;

