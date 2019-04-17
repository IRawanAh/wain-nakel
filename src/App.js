import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  getPlace = () => {
    let url = "https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value";
    axios({
      method: 'get',
      mode: "cors",
      url: url,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    }
    ).then(response => {
      console.log(response.data)
    })
      .catch(error => console.log(error));
  };


  render() {

    return (
      <div className="App">
        <button onClick={this.getPlace}>Suggest</button>
        <h1></h1>
      </div>
    );
  }
}

export default App;
