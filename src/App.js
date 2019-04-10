import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from "./api/index";
import Header from './components/Header/Header';
import Feed from './components/Feed/index';
import FeedInput from './components/FeedInput/index'

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

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Feed feed={this.state.feed} />
        <FeedInput send={this.send} />
      </div>
    );
  }
}

export default App;
