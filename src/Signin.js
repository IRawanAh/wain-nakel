
import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
//import Button from 'react-bootstrap-button-loader';
class Signin extends Component {
    changeActivePage = ({ currentTarget }) => {
        this.props.activePage(currentTarget.name);
    };
    render() {

        return (
            <div className="signin w3-container mainContainer w3-center w3-animate-opacity">
                <h1>تسجيل الدخول</h1>
                <div className="form-group">
                    <input
                        name="email"
                        className="form-control"
                        placeholder="البريد الإلكتروني"
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="كلمة المرور"
                    />
                    <div className="signinbutton">دخول</div>
                    <a name="home" onClick={this.changeActivePage}>العودة</a>
                </div>
            </div >
        );
    }
}

export default Signin;

