import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloUserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Greetings"
    };
  }

  buttonWasClicked = () => {
    alert(`${this.state.greeting} ${this.props.user.name}`)
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
  user: PropTypes.object.isRequired
};

export default HelloUserClass;
