import React from "react";
import PropTypes from "prop-types";

const HTMLText = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
