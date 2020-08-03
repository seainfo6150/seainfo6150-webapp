import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloUserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Greetings",
      numClicks: 0
    };
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
  }

  buttonWasClicked() {
    this.setState({ numClicks: this.state.numClicks + 1}, () => {
      alert(`${this.state.greeting} ${this.props.user.name}, this button was clicked ${this.state.numClicks} times`)
    })
  }

  render() {
    return (
      <section>
        <header>HelloUserClass component</header>
        <button onClick={this.buttonWasClicked}>
          {this.props.user.name}
        </button>
      </section>
    );
  }
}

HelloUserClass.propTypes = {
  user: PropTypes.shape({ 
    name: PropTypes.string.isRequired 
  }).isRequired
};

export default HelloUserClass;
