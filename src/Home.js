import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
//import Button from 'react-bootstrap-button-loader';
class Home extends Component {
    changeActivePage = ({ currentTarget }) => {
        this.props.activePage(currentTarget.name);
    };
    changeActivePage1 = ({ currentTarget }) => {
        this.props.activePage("seggestion");
    };
    render() {

        return (
            <div className="w3-container w3-center w3-animate-opacity mainContainer">
                <img src={logo} className="logo"></img>
                <div className="button" onClick={this.changeActivePage1} name="seggestion" >اقترح</div>
                <ul >
                    <li><a onClick={this.changeActivePage} name="sign-up" >إنشاء حساب</a></li>
                    <li> | </li>
                    <li><a name="sign-in" onClick={this.changeActivePage}>تسجيل الدخول</a></li>
                    <li> | </li>
                    <li><a>لماذا أنشئ حساب؟</a></li>
                </ul>
            </div >
        );
    }
}

export default Home;
