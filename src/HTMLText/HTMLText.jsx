import React from "react";
import PropTypes from "prop-types";
import style from "./HTMLText.module.css";

const HTMLText = (props) => {
  return <div className={style.text} dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
