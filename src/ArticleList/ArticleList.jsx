import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from "./ArticleListItem";

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <ArticleListItem
         title={article.title}
         shortText={article.shortText}
         pubDate={article.pubDate}
         slug = {article.slug}

       />

      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};
export default ArticleList;
