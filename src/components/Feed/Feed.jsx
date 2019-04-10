import React, { Component } from "react";
import "./Feed.scss";
import Message from '../Message/index';

class Feed extends Component {

  render() {
    console.log(this.props.feed);
    const messages = this.props.feed.map(msg => <Message message={msg.data} />);
  
    return (
      <div className='Feed'>
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  };
}

export default Feed;