import React from "react";

import Button from "./Button";

class App extends React.Component {

  render() {
    return (
      <div>
        <p>Hello! This is a simple example of a redux action, please press the button:</p>
        <Button onClick={this.props.onButtonClick}>This button was pressed {this.props.timesButtonPressed} times</Button>
      </div>
    );
  }
}


export default App;