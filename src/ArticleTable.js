import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (
   

    <table border="1">
    <caption>This is a table</caption>
    <thead>
      <tr>
        <th>checkBox</th>
        <th>status</th>
        <th>author</th>
        <th>date</th>
        <th>short Text</th>
      </tr>
    </thead>

  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
  </table>

);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;