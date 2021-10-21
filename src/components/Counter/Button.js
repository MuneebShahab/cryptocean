import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button style={this.props.style} onClick={this.props.action}>
        {this.props.title}
      </button>
    );
  }
}
