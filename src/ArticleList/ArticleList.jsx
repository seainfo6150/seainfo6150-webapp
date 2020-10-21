import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  let displayContent;

  if (props.articles.length) {
    displayContent = (
      <ul>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;