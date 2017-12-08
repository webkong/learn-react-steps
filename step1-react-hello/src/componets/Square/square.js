import React, { Component } from "react";
import './square.css'
class Squeare extends Component {
  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <a className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </a>
    );
  }
}

export default Squeare;
