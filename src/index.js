import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Pane from "./Pane";
import Tab from "./Tab";
import Box from "./Box";

export default class App extends Component {

  getChildContext() {
    return {
      language: {
        hello: "Hello"
      }
    };
  }
  render() {
    return (
      <Pane>
        <Tab>
          <Box userName="Bartosz" />
        </Tab>
      </Pane>
    );
  }
}

App.childContextTypes = {
  language: React.PropTypes.Object
};

ReactDOM.render(<App />, document.getElementById('root'));
