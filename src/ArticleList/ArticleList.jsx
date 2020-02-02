import React from "react";
import PropTypes from 'prop-types'

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.slug}>ArticleListItem component goes here</li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
