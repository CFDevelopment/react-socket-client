import React, { Component } from "react";
import "./Feed.scss";

class Feed extends Component {
  render() {
    const info = this.props.feed.map((msg, index) => (
      <p key={index}>{msg.data}</p>
    ));

    return (
      <div className="Feed">
        <h2>Data Feed</h2>
        {info}
      </div>
    );
  }
}

export default Feed;