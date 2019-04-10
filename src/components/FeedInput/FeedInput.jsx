import React, { Component } from "react";
import "./FeedInput.scss";

class FeedInput extends Component {
  render() {
    return (
      <div className="FeedInput">
        <input onKeyDown={this.props.send} />
      </div>
    );
  }
}

export default FeedInput;