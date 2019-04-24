import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import appStore from './images/app_store.svg';
import playStore from './images/google_play.png';
import Signin from './Signin';
import Nav from './Nav';
import Suggestion from './Suggestion';
import Signup from './Signup';

class App extends Component {
  state = {
    user: null,
    activePage: "home"
  };
  changeActivePage = activePage => {
    this.setState({ activePage });
  };



  render() {

    return (
      <div className="App ">
        <div className="background ">
          <link href="https://fonts.googleapis.com/css?family=Changa|El+Messiri|Tajawal" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          {this.state.activePage === "seggestion" ? <Nav activePage={this.changeActivePage} /> : ""}
          <div class="row  ">
            <div class="col-md-3 col-sm-1"></div>
            <div class="col-md-6 col-sm-10 container1 ">

              {this.state.activePage === "home" ? <Home activePage={this.changeActivePage} /> : ""}
              {this.state.activePage === "sign-in" ? <Signin activePage={this.changeActivePage} /> : ""}
              {this.state.activePage === "sign-up" ? <Signup activePage={this.changeActivePage} /> : ""}
              {this.state.activePage === "seggestion" ? <Suggestion /> : ""}

              <ul>
                <li><img className="store" src={playStore}></img></li>
                <li><img className="store" src={appStore}></img></li>
              </ul>
              <ul >
                <li><i className="fa fa-twitter"> @WainNakel </i></li>
                <li> | </li>
                <li>2018 © جميع الحقوق محفوظة</li>
                <li> | </li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-1 padd"  >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
