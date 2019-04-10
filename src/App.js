import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from "./api/index";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("[SEND]");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.send}>Hit</button>
        </header>
      </div>
    );
  }
}

export default App;
