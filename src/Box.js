import React, { Component } from 'react';

export default class Pane extends Component {

  render() {
    return (
      <div className="container Box">
        {this.context.language.hello} {this.props.userName}
      </div>
    )
  }
}

Pane.contextTypes = {
  language: React.PropTypes.Object
};