import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <div className="Article">
  	<h3>{article.title}</h3>
  	<p><cite>By: {article.author}</cite><br /><time dateTime = {article.pubDate}>{article.pubDate}</time></p>
  	<p>{article.shortText}</p>
  </div>
);

Article.propTypes = {
	article: PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  }).isRequired
};

export default Article;
