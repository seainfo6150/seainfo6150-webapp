import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles }) => (
  <div className="ArticleList">
    <ul className={styles.articleList}>
      {Object.values(articles).map(article => 
        <li>
          <ArticleListItem title={article.title} author={article.author} pubDate={article.pubDate} shortText={article.shortText}/>
        </li>
      )}
    </ul>
  </div>
);

ArticleList.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
