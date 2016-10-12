import React, { Component } from 'react';

export default class Pane extends Component {

  render() {
    return (
      <div className="container Pane">
        {this.props.children}
      </div>
    )
  }
}
