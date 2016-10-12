import React, { Component } from 'react';

export default class Tab extends Component {

  render() {
    return (
      <div className="container Tab">
        {this.props.children}
      </div>
    )
  }
}
