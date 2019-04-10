import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from "./api/index";
import Header from './components/Header/Header';

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
        <Header />
        <header className="App-header">
          <button onClick={this.send}>Hit</button>
        </header>
      </div>
    );
  }
}

export default App;
