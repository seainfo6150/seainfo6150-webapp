  
import React from 'react';
import PropTypes from 'prop-types';
import './ArticleImage.module.css';

const ArticleImage = (props) => {
  return (
    <img src= {props.article.image._url} alt={props.article.title}/>
  );
}
ArticleImage.propTypes = {
    article: PropTypes.object.isRequired
};
export default ArticleImage;