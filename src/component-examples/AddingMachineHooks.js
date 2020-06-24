import React, { useState } from "react";
import PropTypes from "prop-types";

const AddingMachineHooks = (props) => {
  const [currentNum, setCurrentNum] = useState(props.startNum);

  function addOne() {
    setCurrentNum(currentNum + 1);
  }


  let whee;
  if (currentNum % 10 === 0) {
    whee = <div>Whee!</div>;
  }

  return (
    <div style={{ border: "1px solid black", margin: "2rem" }}>
      <header>{props.children}</header>
      <div>We started with {props.startNum}</div>
      <div>We're now at {currentNum}</div>
      <button onClick={addOne}>Click me to add 1</button>
      {whee}
    </div>
  );
}

AddingMachineHooks.propTypes = {
  startNum: PropTypes.number.isRequired
};

export default AddingMachineHooks
