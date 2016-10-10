import React from 'react';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
