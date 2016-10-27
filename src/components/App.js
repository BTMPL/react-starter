import React from "react";

import Button from "./Button";

class App extends React.Component {

  render() {
    return (
      <div>
        <p>Hello! This is a simple example of a redux action, please press the button:</p>
        <Button onClick={this.props.onButtonClick}>Load more items</Button>
        <p>Currently loaded items:</p>
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>Item #{index} "{item.name}" - value: {item.value}</div>
          )
        })}
      </div>
    );
  }
}

App.defaultProps = {
  items: []
};


export default App;