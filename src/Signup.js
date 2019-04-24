import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';

class Signup extends Component {
    changeActivePage = ({ currentTarget }) => {
        this.props.activePage(currentTarget.name);
    };
    render() {

        return (
            <div className="signin mainContainer w3-container w3-center w3-animate-opacity">
                <h1>إنشاء حساب</h1>
                <div className="form-group">
                    <input

                        className="form-control"
                        placeholder="الاسم"
                    />
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
                    <input
                        className="form-control"
                        type="password"
                        placeholder="اعادة كلمة المرور"
                    />
                    <div className="signinbutton">إنشاء</div>
                    <a name="home" onClick={this.changeActivePage}>العودة</a>
                </div>
            </div >
        );
    }
}

export default Signup;

