import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from "./api/index";
import Header from './components/Header/Header';
import Feed from './components/Feed/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    feed: []
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        feed: [...this.state.feed, msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("[SEND]");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Feed feed={this.state.feed} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
