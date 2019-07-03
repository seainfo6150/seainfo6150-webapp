import React from 'react';
import PropTypes from 'prop-types';
import ArticleImage from './ArticleImage';
import styles from './ArticleListItem.module.css';

const ArticleListItem = ({ title, author, pubDate, shortText, url }) => (
  <article className={styles.articleListItem}>
    <ArticleImage title={title} url={url} />		
  	<p className={styles.articleText}>{shortText}</p>
  	<footer className={styles.articleDateAndAuthor}>
  		<p><cite>By: {author}</cite><br /><strong><time dateTime = {pubDate}>{pubDate}</time></strong></p>
  	</footer>
  </article>
);

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;