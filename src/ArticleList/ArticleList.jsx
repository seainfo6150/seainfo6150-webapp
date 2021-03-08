import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = (props) => {
  const { article } = props;

  let displayContent;
  if (article.length) {
    displayContent = (
      <ul>
        {article.map((item) => (
          <li key={item.slug}>
            <ArticleListItem item={item} />
          </li>
        ))}
      </ul>
    );
  } else {
    displayContent = <h2>You have no data!</h2>;
  }

  return <section>{displayContent}</section>;
};

export default ArticleList;
