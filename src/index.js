import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Pane from "./Pane";
import Tab from "./Tab";
import Box from "./Box";

export default class App extends Component {

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


ReactDOM.render(<App />, document.getElementById('root'));
