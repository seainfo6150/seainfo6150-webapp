import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

const ArticleImage = ({ title, url }) => (
  <section> 
  	<img className={styles.articleImage} src={url} alt={title}/>
    <h2 className={styles.articleTitle}>{title}</h2>
  </section>
);

ArticleImage.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default ArticleImage;