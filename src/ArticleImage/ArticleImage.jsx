import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
  return <img className={styles.image} alt={props.title} src={props.url} />;
};

ArticleImage.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default ArticleImage;
