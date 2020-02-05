import React from "react";
import PropTypes from "prop-types";

class AddingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 0
    };
  }

  addOne = () => {
    this.setState({
      currentNum: this.state.currentNum + 1
    });
  }

  render() {
    let whee;

    const startNum = this.props.startNum;

    if (this.state.currentNum % 10 === 0) {
      whee = <div>Whee!</div>;
    }

    return (
      <div style={{ border: "1px solid black", margin: "2rem" }}>
        <header>{this.props.children}</header>
        <div>We started with {this.props.startNum}</div>
        <div>We're now at {this.props.startNum + this.state.currentNum}</div>
        <button onClick={this.addOne}>Click me to add 1</button>
        {whee}
      </div>
    );
  }
}

AddingMachine.propTypes = {
  startNum: PropTypes.number.isRequired
};

export default AddingMachine;
