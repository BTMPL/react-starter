import React from "react";
import { render } from "react-dom";

import { Dispatcher } from "flux";

const Actions = {
  BUTTON_CLICKED: () => ({
    actionType: "click"
  })
}

let ClickCounter = {
  state: {
    count: 0
  },

  getState: function() {
    return this.state;
  },

  increase: function() {
    this.state.count++;
    this.emit();
  },

  listeners:[],

  emit: function() {
    this.listeners.map((callback) => callback(this));
  },

  addChangeListener: function(callback) {
    this.listeners.push(callback);
  },

  removeChangeListener: function(callback) {
    this.listeners.splice(this.listeners.indexOf(callback), 1);
  }
}

let AppDispatcher = new Dispatcher();
AppDispatcher.register((action) => {
  switch(action.actionType) {
    case "click":
      ClickCounter.increase();
      break;
  }
});

class Button extends React.Component {

  render() {
    return (
      <button onClick={() => AppDispatcher.dispatch(Actions.BUTTON_CLICKED())}>{this.props.children}</button>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.callback = ClickCounter.addChangeListener((store) => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    ClickCounter.removeChangeListener(this.callback);
  }

  render() {
    return (
      <div>
        <Button>This button</Button> was clicked { this.state.count } times!
      </div>
    );
  }
};

render(<App />, document.getElementById("root"));