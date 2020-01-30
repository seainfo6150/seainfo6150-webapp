import React from 'react';
// import data from '../data/articles.json';


const ArticleListItem = (props) => {
  
  return (
    <div>
      <section>
        <h3>{props.article.title}</h3>
        <p>{props.article.shortText}</p>
        <time datetime={props.article.pubYear}>{props.article.pubDate}</time>
        <button onClick={() => alert(`${props.article.slug}`)}>
        show article slug
        </button>
      </section>
    </div>
  );
}

export default ArticleListItem;