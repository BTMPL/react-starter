import React, { Component } from 'react';

export default class Pane extends Component {

  render() {
    return (
      <div className="container Box">
        Witaj {this.props.userName}
      </div>
    )
  }
}