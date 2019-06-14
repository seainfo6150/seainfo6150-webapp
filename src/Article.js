import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <article>
	<header>
  		<h3>{article.title}</h3>
	</header>
  	<p><cite>By: {article.author}</cite><br /><time dateTime = {article.pubDate}>{article.pubDate}</time></p>
  	<p>{article.shortText}</p>
  </article>
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
