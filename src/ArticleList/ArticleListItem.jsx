import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';

const ArticleListItem = ({ title, author, pubDate, shortText }) => (
  <div className={styles.articleListItem}>
  	<h2 className={styles.articleTitle}>{title}</h2>
  	<p>{shortText}</p>
  	<p className={styles.articleDateAndAuthor}><cite>By: {author}</cite><br /><strong><time dateTime = {pubDate}>{pubDate}</time></strong></p>
  </div>
);

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;