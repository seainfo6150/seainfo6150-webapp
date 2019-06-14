import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css'

const ArticleListItem = ({ title, author, pubData, shortTest }) => (
    <div className = {styles.articleListItem}>
        <header className = {styles.article_Title}>
            <h2>{title}</h2>
        </header>
        <p>{shortTest}</p>
        <footer className = {styles.article_Date_Author}>
            <p><city>By: {author}</city><br /> <strong><time dateTime = {pubData}>{pubData}</time></strong></p>    
        </footer>   
    </div>
);

ArticleListItem.propTypes = {
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
};

export default ArticleListItem;
