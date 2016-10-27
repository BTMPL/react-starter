import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const ACTIONS = {
  increase: "counter/increase"
};

function counterReducer (state = {count: 0}, action) {
  switch(action.type) {
    case ACTIONS.increase:
      return {count: state.count + 1}

    default:
      return state;
  }
}

const store = createStore(counterReducer);


class Button extends React.Component {

  render() {
    return (
      <button onClick={() => store.dispatch({type: ACTIONS.increase})}>{this.props.children}</button>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Button>This button</Button> was clicked { this.props.count } times!
      </div>
    );
  }
};

const ConnectedApp = connect((store) => ({
  count: store.count
}))(App);


render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
document.getElementById("root"));