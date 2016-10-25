import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {

  render() {
    return (
      <button style={this.props.style}>
        {this.props.emoticon}
        {this.props.children}
      </button>
    );
  }
}


class Emoticon extends Component {

  render() {
    return (
      <span>:)</span>
    );
  }
}

class ChangeName extends Component {

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button onClick={() => {
          this.handleClick();
        }} >Change my name!</button>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Bratosz"
    };

    this.handleClick = this.handlClick.bind(this);
  }

  handleClick() {
      this.setState({
        name: "Nah, another name!"
      });
  }

  render() {
    return (
      <div>
        {this.state.name}
        <ChangeName
          onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
