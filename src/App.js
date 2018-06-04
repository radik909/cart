import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentWillMount() {
    fetch(
      "https://raw.githubusercontent.com/radik909/cart/master/src/MOCK_DATA.csv"
    )
      .then(res => res.text())
      .then(csv => {
        console.log(csv);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
