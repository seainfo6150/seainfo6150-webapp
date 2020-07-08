import React from "react";
import PropTypes from "prop-types";

const FunctionalComponent = ({ name = "World" }) => {
  return <div>Hello {name}, here&rsquo;s my functional component</div>;
};

FunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired
};
export default FunctionalComponent;
