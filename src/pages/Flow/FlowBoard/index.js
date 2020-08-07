import React, { Component } from "react";

class FlowBoard extends Component {
  render() {
    console.log(this.props);
    const name = this.props.match.params.name;
    return (
      <div class="container">
        <div class="header">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default FlowBoard;
